package com.gameprofile.grupospartidasapis.controller;

import com.gameprofile.grupospartidasapis.dto.request.GrupoRequestDTO;
import com.gameprofile.grupospartidasapis.entity.Grupo;
import com.gameprofile.grupospartidasapis.repository.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GrupoController {

    @Autowired
    private GrupoRepository grupoRepository;

    @PostMapping(path = "/grupos",consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public Grupo postGrupo(@RequestBody GrupoRequestDTO grupoRequestDTO){
        Grupo grupo = this.grupoRepository.save(grupoRequestDTO.build());
        return grupo;
    }

}
