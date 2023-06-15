package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Grupo;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/grupos")
public class GrupoController {
        @Autowired
        private GrupoRepository repository;

        @GetMapping
        public List<Grupo> findAll() {
            try {
                return repository.findAll();
            } catch(IllegalStateException e) {
                return Collections.emptyList();
            }
        }

        @GetMapping(value = "/{idGrupo}")
        public Grupo findById(@PathVariable Integer idGrupo) throws ObjectNotFoundException {
            return findById(idGrupo);
        }
        @PostMapping
        public Grupo insert(@RequestBody Grupo grupo) {
            return repository.save(grupo);
        }
}
