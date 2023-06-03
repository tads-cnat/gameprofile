package com.gameprofile.grupospartidasapis.services.impl;
import com.gameprofile.grupospartidasapis.dto.JogadorDTO;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.entities.Papel;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import com.gameprofile.grupospartidasapis.repositories.PapelRepository;
import com.gameprofile.grupospartidasapis.services.JogadorService;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JogadorServiceImpl implements JogadorService {
    private JogadorRepository jogadorRepository;
    private PapelRepository papelRepository;
    private PasswordEncoder passwordEnconder;

    public JogadorServiceImpl(JogadorRepository jogadorRepository, PapelRepository papelRepository, PasswordEncoder passwordEncoder){
        this.jogadorRepository = jogadorRepository;
        this.papelRepository = papelRepository;
        this.passwordEnconder = passwordEncoder;
    }
    @Override
    public void saveJogador(JogadorDTO jogadorDTO) {
        Jogador jogador = new Jogador();
        jogador.setNickname(jogadorDTO.getNickName());
        jogador.setEmail(jogadorDTO.getEmail());
        jogador.setSenha(passwordEnconder.encode(jogadorDTO.getSenha()));

        Papel papel = papelRepository.findByNickname("ROLE_ADMIN");
        if(papel == null){
            papel = checkRoleExist();   
        }
        jogador.setPapeis(Arrays.asList(papel));
        jogadorRepository.save(jogador);
        
    }

    @Override
    public Jogador findJogadorByEmail(String email) {
        return jogadorRepository.findByEmail(email);
    }

    @Override
    public List<JogadorDTO> findAllJogadores() {
        List<Jogador> jogadores = jogadorRepository.findAll();
        return jogadores.stream()
                .map((jogador) -> mapToJogadorDTO(jogador))
                .collect(Collectors.toList());
     }

     private JogadorDTO mapToJogadorDTO(Jogador jogador){
        JogadorDTO jogadorDTO = new JogadorDTO();
        jogadorDTO.setEmail(jogador.getEmail());
        jogadorDTO.setNickName(jogador.getNickname());
        return jogadorDTO;
     }

     private Papel checkRoleExist(){
        Papel papel = new Papel();
        papel.setNickname("ROLE_ADMIN");
        papelRepository.save(papel);
        return papel;

}
    @Override
    public boolean passwordMatches(String senhaDigitada, String senhaArmazenada) {
        return passwordEnconder.matches(senhaDigitada, senhaArmazenada);
    }

    
}