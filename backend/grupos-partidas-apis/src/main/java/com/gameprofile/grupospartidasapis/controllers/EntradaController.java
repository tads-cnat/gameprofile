package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/entradas")
public class EntradaController extends CustomController<Entrada, Integer, EntradaRepository> {
    public EntradaController(EntradaRepository repository){
        super(repository);
    }
}
