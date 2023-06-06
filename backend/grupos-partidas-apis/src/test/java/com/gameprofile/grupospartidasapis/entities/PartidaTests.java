package com.gameprofile.grupospartidasapis.entities;

import org.junit.jupiter.api.Test;

import java.util.Set;
import java.util.TreeSet;

import static org.assertj.core.api.Assertions.assertThat;

public class PartidaTests {
    private static final Integer PARTIDA1 = 1;
    private static final Integer PARTIDA2 = 2;

    @Test
    public void idPartidaIgual() {
        assertThat(Partida.builder().idPartida(PARTIDA1).build())
                .isEqualTo(Partida.builder().idPartida(PARTIDA1).build());
    }

    @Test
    public void idPartidaDiferente() {
        assertThat(Partida.builder().idPartida(PARTIDA1).build())
                .isNotEqualTo(Partida.builder().idPartida(PARTIDA2).build());
    }

    @Test
    public void compareTo() {
        Set<Partida> partidas = new TreeSet<>();

        Partida p2 = Partida.builder().idPartida(PARTIDA2).build();
        partidas.add(p2);
        Partida p1 = Partida.builder().idPartida(PARTIDA1).build();
        partidas.add(p1);

        assertThat(partidas.iterator().next()).isEqualTo(p1);
    }
}