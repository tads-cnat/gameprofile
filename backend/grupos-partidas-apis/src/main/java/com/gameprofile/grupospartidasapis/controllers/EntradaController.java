package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/entradas")
public class EntradaController {
    @Autowired
    private EntradaRepository repository;

    @GetMapping
    public List<Entrada> findAll() {
        return repository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Entrada findAll(@PathVariable Integer id) {
        return repository.findById(id).get();
    }

    @PostMapping
    public Entrada insert(@RequestBody Entrada entrada) {
        return repository.save(entrada);
    }
}
