package com.gameprofile.grupospartidasapis.controller;

import com.gameprofile.grupospartidasapis.repository.InfoGrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoGrupoController {
    @Autowired
    private InfoGrupoRepository infoGrupoRepository;

    @GetMapping(path = "/grupos/{id_grupo}")
    public ResponseEntity consultar(@PathVariable("id_grupo") int idGrupo){
        return infoGrupoRepository.findById(idGrupo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }
}
