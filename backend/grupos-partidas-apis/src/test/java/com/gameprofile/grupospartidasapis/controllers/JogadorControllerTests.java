package test.java.com.gameprofile.grupospartidasapis.controllers;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.http.HttpStatus;
import java.time.LocalDate;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.fail;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class JogadorControllerTests{
    @Autowired
    private TestRestTemplate restTemplate;
    @Autowired
    private JogadorRepository jogadorRepository;

    @Test
    public void testCreateJogador(){
        Jogador jogador = Jogador.builder()
            .nickname("Dina")
            .nome("Dina Patricia Gomes")
            .email("dina@gmail.com")
            .senha("senha123")
            .nascimento(LocalDate.of(2000,10,18))
            .entrouEm(LocalDate.now())
            .build();   
        ResponseEntity<Jogador> response = restTemplate.postForEntity("/jogadores", jogador, Jogador.class);
            assertEquals(HttpStatus.CREATED, response.getStatusCode());
            assertNotNull(response.getBody().getId());
            assertEquals(jogador.getNickname(), response.getBody().getNickname());
            assertEquals(jogador.getNome(), response.getBody().getNome());
            assertEquals(jogador.getEmail(), response.getBody().getEmail());
            assertEquals(jogador.getNascimento(), response.getBody().getNascimento());
            assertEquals(jogador.getEntrouEm(), response.getBody().getEntrouEm());
    }
    @Test
    public void testGetJogadorById() {
        Jogador jogador = Jogador.builder()
            .nickname("Ruan")
            .nome("Ruan Franklin")
            .email("ruan.franklin@outlook.com.com")
            .senha("654321")
            .nascimento(LocalDate.of(2002, 5, 6))
            .entrouEm(LocalDate.now())
            .build();
        try{
            jogadorRepository.save(jogador);
        }catch(Exception e){
            fail("O corpo da resposta não pode ser nulo");
        }
        ResponseEntity<Jogador> response = restTemplate.getForEntity("/jogadores/" + jogador.getId(), Jogador.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(jogador.getId(), response.getBody().getId());
        assertEquals(jogador.getNickname(), response.getBody().getNickname());
        assertEquals(jogador.getNome(), response.getBody().getNome());
        assertEquals(jogador.getEmail(), response.getBody().getEmail());
        assertEquals(jogador.getNascimento(), response.getBody().getNascimento());
        assertEquals(jogador.getEntrouEm(), response.getBody().getEntrouEm());
    }

}
