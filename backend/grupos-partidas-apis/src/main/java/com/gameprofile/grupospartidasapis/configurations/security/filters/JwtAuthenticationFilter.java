package com.gameprofile.grupospartidasapis.configurations.security.filters;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

public class JwtAuthenticationFilter extends BasicAuthenticationFilter {

    private final String secret;
    private final UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, String secret, UserDetailsService userDetailsService) {
        super(authenticationManager);
        this.secret = secret;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        Authentication authentication = getAuthentication(request);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }

    private Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null) {
            Claims claims = Jwts.parser()
                    .setSigningKey(secret.getBytes())
                    .parseClaimsJws(token.replace("Bearer ", ""))
                    .getBody();

            String username = claims.getSubject();
            if (username != null) {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                Collection<? extends GrantedAuthority> authorities = parseAuthorities(claims.get("roles"));
                return new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
            }
            return null;
        }
        return null;
    }

    private Collection<? extends GrantedAuthority> parseAuthorities(Object roles) {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        if (roles instanceof ArrayList) {
            for (Object role : (ArrayList) roles) {
                authorities.add(new SimpleGrantedAuthority((String) role));
            }
        }
        return authorities;
    }

    public String generateToken(UserDetails userDetails) {
        Claims claims = Jwts.claims().setSubject(userDetails.getUsername());
        claims.put("roles", userDetails.getAuthorities());

        Date now = new Date();
        Date validity = new Date(now.getTime() + 3600000);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS512, secret.getBytes())
                .compact();
    }
}
