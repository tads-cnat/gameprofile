package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import com.gameprofile.grupospartidasapis.services.JogadorService;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/jogadores")

public class JogadorController {
        private JogadorRepository repository;

        private RestTemplate restTemplate;
        public JogadorController(JogadorRepository repository, RestTemplate restTemplate){
            this.repository=repository;
            this.restTemplate=restTemplate;
        }

        @GetMapping
        public List<Jogador> findAll() {
            try {
                return repository.findAll();
            } catch(IllegalStateException e) {
                return Collections.emptyList();
            }
        }

        @GetMapping(value = "/{id}")
        public Jogador findAll(@PathVariable Integer id) throws ObjectNotFoundException {
            return repository.findById(id).get();
        }
        
        @GetMapping(value = "/lol/summoner/v4/summoners/by-name/{summonerName}")
        public ResponseEntity<?> buscarJogadorPorNome(@PathVariable String summonerName) {
            String apiKey="RGAPI-93297058-3a2f-4fc2-a962-c2542408f49b";
            String apiUrl = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + apiKey;
            ResponseEntity<?> response = restTemplate.getForEntity(apiUrl, Object.class);
            return response;

}        
        @Autowired
        private JogadorService jogadorService;

        @PostMapping("/cadastrar")
        public ResponseEntity<Jogador> cadastrarJogador(@RequestBody Jogador jogador) {
            Jogador novoJogador = jogadorService.cadastrarJogador(jogador);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoJogador);
}

        }
    