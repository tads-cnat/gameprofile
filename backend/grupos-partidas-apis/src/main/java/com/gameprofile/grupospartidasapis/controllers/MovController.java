package com.gameprofile.grupospartidasapis.controllers;


import com.gameprofile.grupospartidasapis.dto.MovDTO;
import com.gameprofile.grupospartidasapis.entities.Mov;
import com.gameprofile.grupospartidasapis.repositories.MovRepository;
import com.gameprofile.grupospartidasapis.services.MovService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return repository.findAll();
    }

    @GetMapping(value = "/{idGrupo}")
    public MovDTO findById(@PathVariable Integer idGrupo) {
        return service.findById(idGrupo);
    }
    @PostMapping
    public Mov insert(@RequestBody Mov mov) {
        return repository.save(mov);
    }
}
