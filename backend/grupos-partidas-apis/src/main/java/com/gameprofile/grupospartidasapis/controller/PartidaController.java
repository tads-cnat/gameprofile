package com.gameprofile.grupospartidasapis.controller;


import com.gameprofile.grupospartidasapis.dto.request.GrupoRequestDTO;
import com.gameprofile.grupospartidasapis.entity.Grupo;
import com.gameprofile.grupospartidasapis.entity.Partida;
import com.gameprofile.grupospartidasapis.repository.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PartidaController {

    @Autowired
    private PartidaRepository partidaRepository;

    @PostMapping(path = "/partida")
    public Partida save(@RequestBody Partida partida){
        return partidaRepository.save(Partida.buil());
    }

    @GetMapping(path = "/partida/{id_partida}")
    public ResponseEntity consultar(@PathVariable("id_partida") int idPartida){
        return partidaRepository.findById(idPartida)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping(path = "/grupos/{id_grupo}/partida",consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Partida save(@RequestBody Partida partida){
        Partida partida = this.partidaRepository.save(Partida.build());
        return partida;
    }
}
