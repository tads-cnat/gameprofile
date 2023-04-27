package com.gameprofile.grupospartidasapis.services;

import com.gameprofile.grupospartidasapis.dto.MovDTO;
import com.gameprofile.grupospartidasapis.entities.Mov;
import com.gameprofile.grupospartidasapis.repositories.MovRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovService {
    @Autowired
    private MovRepository repository;

    @Transactional(readOnly = true)
    public MovDTO findById(Integer idGrupo) {
        Mov entity = repository.findById(idGrupo).get();
        return dto = new MovDTO(entity);
    }
}