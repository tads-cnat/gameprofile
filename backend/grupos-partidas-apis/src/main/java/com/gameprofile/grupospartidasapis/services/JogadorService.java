package com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JogadorService implements UserDetailsService {

    @Autowired
    private JogadorRepository jogadorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Jogador jogador = jogadorRepository.findByEmail(email);
        if (jogador == null) {
            throw new UsernameNotFoundException("Jogador não encontrado.");
        }
        return User.builder()
    .   username(jogador.getEmail())
    .   password(jogador.getSenha())
    .   authorities(getAuthorities())
        .build();
    }

    private Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    public Jogador save(Jogador jogador) {
        // criptografa a senha antes de salvar o jogador
        jogador.setSenha(passwordEncoder.encode(jogador.getSenha()));
        return jogadorRepository.save(jogador);
    }

    public Jogador findByEmail(String email) {
        return jogadorRepository.findByEmail(email);
    }
}
