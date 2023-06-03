package com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.entities.Papel;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService{
    private JogadorRepository jogadorRepository;

    public CustomUserDetailsService(JogadorRepository jogadorRepository){
        this.jogadorRepository = jogadorRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        Jogador jogador = jogadorRepository.findByEmail(email);
        if(jogador != null){
            return new org.springframework.security.core.userdetails.User(jogador.getEmail(),
            jogador.getSenha(),
            mapPapeisParaAutoridades(jogador.getPapeis()));
        }else{
            throw new UsernameNotFoundException("Jogador não encontrado");
        }
    }
    private Collection < ? extends GrantedAuthority> mapPapeisParaAutoridades(Collection<Papel> papeis){
        Collection <? extends GrantedAuthority> mapPapeis = papeis.stream().map(papel -> new SimpleGrantedAuthority(papel.getNickname())).collect(Collectors.toList());
        return mapPapeis;
    }
}