package com.gameprofile.grupospartidasapis.entities;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class JogadorTests {

    @Test
    public void testarJogadorIgual() {
        Jogador jogador1 = Jogador.builder()
                .nickname("nick1")
                .nome("Nome1")
                .email("email1@example.com")
                .senha("senha1")
                .build();

        Jogador jogador2 = Jogador.builder()
                .nickname("nick1")
                .nome("Nome1")
                .email("email1@example.com")
                .senha("senha1")
                .build();

        assertThat(jogador1).isEqualTo(jogador2);
    }

    @Test
    public void testarJogadorDiferente() {
        Jogador jogador1 = Jogador.builder()
                .nickname("nick1")
                .nome("Nome1")
                .email("email1@example.com")
                .senha("senha1")
                .build();

        Jogador jogador2 = Jogador.builder()
                .nickname("nick2")
                .nome("Nome2")
                .email("email2@example.com")
                .senha("senha2")
                .build();

        assertThat(jogador1).isNotEqualTo(jogador2);
    }
}