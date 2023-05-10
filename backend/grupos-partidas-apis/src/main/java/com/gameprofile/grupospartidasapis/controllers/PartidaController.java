package com.gameprofile.grupospartidasapis.controllers;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.entities.Partida;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;
import com.gameprofile.grupospartidasapis.repositories.PartidaRepository;

@RestController
@RequestMapping(value = "/partidas")
public class PartidaController {
    @Autowired
    private PartidaRepository repository;

    /**
     * Retorna uma lista de todas as partidas existentes.
     * 
     * @return lista de partidas existentes 
     */
    @GetMapping
    public List<Partida> findAll() {
        try {
            return repository.findAll();
        } catch(IllegalStateException e) {
            return Collections.emptyList();
        }
    }

    @GetMapping(value = "/{id}")
    public Partida findAll(@PathVariable Integer id) throws ObjectNotFoundException {
        return repository.findById(id).get();
    }

    @GetMapping(value = "/paises")
    public List<Object> getCountries(){
        String url = "https://restcountries.com/v3.1/all";
        RestTemplate restTemplate = new RestTemplate();
        Object[] paises = restTemplate.getForObject(url, Object[].class);
        return Arrays.asList(paises);
    }

    @PostMapping
    public Partida insert(@RequestBody Partida partida) {
        return repository.save(partida);
    }
}
