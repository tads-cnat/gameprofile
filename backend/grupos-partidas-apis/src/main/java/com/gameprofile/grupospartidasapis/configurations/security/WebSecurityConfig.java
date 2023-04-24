package com.gameprofile.grupospartidasapis.configurations.security;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.gameprofile.grupospartidasapis.services.JogadorService;

@Configuration
@EnableWebSecurity // habilita a configuração de segurança baseada em web
public class WebSecurityConfig {
	@Bean
	public SecurityFilterChain configure(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests( (authorize) -> authorize
           .requestMatchers("/", "/grupos").permitAll()
           .requestMatchers("/user/cadastro").hasAuthority(ADMIN)
           .anyRequest().authenticated()
     ).formLogin( (form) -> form
           .defaultSuccessUrl("/", true)
           .failureUrl("/login-error")
           .permitAll()
      ).logout( (logout) -> logout
           .logoutSuccessUrl("/")
           .deleteCookies("JSESSIONID")
      ).exceptionHandling( (ex) -> ex
           .accessDeniedPage("/negado")
      );
      return http.build();
}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
}

	@Bean
	public AuthenticationManager authenticationManager(HttpSecurity http,PasswordEncoder passwordEncoder,JogadorService userDetailsService) throws Exception {
		return http.getSharedObject(AuthenticationManagerBuilder.class)
               .userDetailsService(userDetailsService)
               .passwordEncoder(passwordEncoder)
               .and()
               .build();
}

public static final String ADMIN = "ADMIN";

}

