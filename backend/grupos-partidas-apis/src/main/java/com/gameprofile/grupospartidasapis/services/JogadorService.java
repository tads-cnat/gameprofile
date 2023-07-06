package com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import com.gameprofile.grupospartidasapis.services.CrudService;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JogadorService extends CrudService<Jogador, Integer> {

    @Autowired
    public void setRepository(JogadorRepository jogadorRepository) {
        super.setRepository(jogadorRepository);
    }
}
