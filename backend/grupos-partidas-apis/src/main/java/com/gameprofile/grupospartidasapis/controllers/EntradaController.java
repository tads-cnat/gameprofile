package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/entradas")
public class EntradaController {
    @Autowired
    private EntradaRepository repository;

    @GetMapping
    public List<Entrada> findAll() {
        return repository.findAll();
    }

    @GetMapping( "/{id}")
    public Entrada findAll(@PathVariable Integer id) {
        return repository.findById(id).get();
    }

    @PostMapping
    public Entrada insert(@RequestBody Entrada entrada) {
        return repository.save(entrada);
    }
}
