package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Partida;
import com.gameprofile.grupospartidasapis.repositories.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
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

    @GetMapping(value = "/paises")
    public List<Object> getCountries(){
        String url = "https://restcountries.com/v3.1/all";
        RestTemplate restTemplate = new RestTemplate();
        Object [] paises = restTemplate.getForObject(url, Object[].class);
        return Arrays.asList(paises);

    }

    @PostMapping
    public Partida insert(@RequestBody Partida partida) {
        return repository.save(partida);
    }
}
