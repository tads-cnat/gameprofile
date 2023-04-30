package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import com.gameprofile.grupospartidasapis.repositories.EntradaRepository;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/entradas")
public class EntradaController extends CustomController<Entrada, Integer, EntradaRepository> {
    public EntradaController(EntradaRepository repository){
        super (repository);
    }

    @GetMapping("/{id}")
    public Entrada findById(@PathVariable Integer id) {
        return super.findById(id, getRepository(), null);
    }
    @GetMapping
    public List<Entrada> findAll() {
        return getRepository().findAll();
    }

    @PostMapping
    public Entrada insert(@RequestBody Entrada entrada) {
        return super.save(entrada, getRepository());
    }
}