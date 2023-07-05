package com.gameprofile.grupospartidasapis.services;

import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import java.io.Serializable;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service of Jogador.
 */
@Service
public class JogadorService<T extends Jogador, ID extends Serializable> extends CrudService<T, ID> {
    @Autowired
    private JogadorRepository<T, ID> jogadorRepository;
    
    public Optional<T> findByNickname(String nickname) {
        return jogadorRepository.findByNickname(nickname);
    }
}