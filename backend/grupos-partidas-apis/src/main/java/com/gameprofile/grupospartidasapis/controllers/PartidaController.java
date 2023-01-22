package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.entities.Partida;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;
import com.gameprofile.grupospartidasapis.repositories.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/partidas")
public class PartidaController {
    @Autowired
    private PartidaRepository repository;

    @GetMapping
    public List<Partida> findAll() {
        return repository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Partida findAll(@PathVariable Integer id) {
        return repository.findById(id).get();
    }

    @PostMapping
    public Partida insert(@RequestBody Partida partida) {
        return repository.save(partida);
    }
}
