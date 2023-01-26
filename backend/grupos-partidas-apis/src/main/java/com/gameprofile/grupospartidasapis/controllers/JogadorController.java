package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(value = "/jogadores")
public class JogadorController {
        @Autowired
        private JogadorRepository repository;

        @GetMapping
        public List<Jogador> findAll() {
            return repository.findAll();
        }

        @GetMapping(value = "/{id}")
        public Jogador findAll(@PathVariable Integer id) {
            return repository.findById(id).get();
        }
        @PostMapping("/salvar")
        public ResponseEntity<Jogador> salvar (@RequestBody Jogador jogador){
            return ResponseEntity.ok(repository.save(jogador));
        }

}
