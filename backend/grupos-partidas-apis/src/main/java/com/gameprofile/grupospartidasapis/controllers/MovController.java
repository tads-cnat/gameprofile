package com.gameprofile.grupospartidasapis.controllers;


import com.gameprofile.grupospartidasapis.dto.MovDTO;
import com.gameprofile.grupospartidasapis.entities.Mov;
import com.gameprofile.grupospartidasapis.repositories.MovRepository;
import com.gameprofile.grupospartidasapis.services.MovService;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/grupos")
public class MovController {
    @Autowired
    private MovService service;

    @Autowired
    private MovRepository repository;

    @GetMapping
    public List<Mov> findAll() {
        try {
            return repository.findAll();
        } catch(Exception e) {
            return Collections.emptyList();
        }
    }

    @GetMapping(value = "/{idGrupo}")
    public MovDTO findById(@PathVariable Integer idGrupo) throws ObjectNotFoundException {
        return service.findById(idGrupo);
    }
    @PostMapping
    public Mov insert(@RequestBody Mov mov) {
        return repository.save(mov);
    }
}
