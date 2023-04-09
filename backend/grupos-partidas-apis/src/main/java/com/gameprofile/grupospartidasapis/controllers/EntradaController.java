package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/entradas")
public class EntradaController {
    @Autowired
    private EntradaRepository repository;

    @GetMapping
    public List<Entrada> findAll() {
        try {
            return repository.findAll();
        } catch (IllegalStateException e) {
            return Collections.emptyList();
        }
    }

    @GetMapping(value = "/{id}")
    public Entrada findAll(@PathVariable Integer id) throws ObjectNotFoundException {
        return repository.findById(id).get();
    }

    @PostMapping
    public Entrada insert(@RequestBody Entrada entrada) {
        return repository.save(entrada);
    }
}