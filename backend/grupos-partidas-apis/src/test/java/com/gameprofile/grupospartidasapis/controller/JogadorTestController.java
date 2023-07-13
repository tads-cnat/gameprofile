package com.gameprofile.grupospartidasapis.controller;

import com.gameprofile.grupospartidasapis.controllers.JogadorController;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import org.hibernate.ObjectNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

public class JogadorTestController {

    @Mock
    private JogadorRepository jogadorRepository;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private JogadorController jogadorController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindAll() {
        // Cenário de teste
        List<Jogador> jogadores = Collections.singletonList(new Jogador());
        when(jogadorRepository.findAll()).thenReturn(jogadores);

        // Executar o método a ser testado
        List<Jogador> resultado = jogadorController.findAll();

        // Verificar o resultado
        assertThat(resultado).isEqualTo(jogadores);
    }

    @Test
    public void testFindById() throws ObjectNotFoundException {
        // Cenário de teste
        Integer idJogador = 1;
        Jogador jogador = new Jogador();
        when(jogadorRepository.findById(idJogador)).thenReturn(Optional.of(jogador));

        // Executar o método a ser testado
        Jogador resultado = jogadorController.findAll(idJogador);

        // Verificar o resultado
        assertThat(resultado).isEqualTo(jogador);
    }

    @Test
    public void testFindById_JogadorNaoEncontrado() {
        // Cenário de teste
        Integer idJogador = 1;
        when(jogadorRepository.findById(idJogador)).thenReturn(Optional.empty());

        // Executar o método a ser testado e verificar a exceção
        assertThrows(ObjectNotFoundException.class, () -> {
            jogadorController.findAll(idJogador);
        });
    }

    @Test
    public void testInsert() {
        // Cenário de teste
        Jogador jogador = new Jogador();
        Jogador jogadorSalvo = new Jogador();
        when(jogadorRepository.save(jogador)).thenReturn(jogadorSalvo);

        // Executar o método a ser testado
        ResponseEntity<Jogador> resultado = jogadorController.salvar(jogador);

        // Verificar o resultado
        assertThat(resultado.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(resultado.getBody()).isEqualTo(jogadorSalvo);
    }

    @Test
    public void testBuscarJogadorPorNome() {
        // Cenário de teste
        String summonerName = "summoner1";
        String apiUrl = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/summoner1?api_key=RGAPI-93297058-3a2f-4fc2-a962-c2542408f49b";
        Object responseObj = new Object();
        ResponseEntity<Object> responseEntity = new ResponseEntity<>(responseObj, HttpStatus.OK);
        when(restTemplate.getForEntity(apiUrl, Object.class)).thenReturn(responseEntity);

        // Executar o método a ser testado
        ResponseEntity<?> resultado = jogadorController.buscarJogadorPorNome(summonerName);

        // Verificar o resultado
        assertThat(resultado.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(resultado.getBody()).isEqualTo(responseObj);
    }
}