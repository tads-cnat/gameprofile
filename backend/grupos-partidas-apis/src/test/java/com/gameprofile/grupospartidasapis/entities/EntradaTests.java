package com.gameprofile.grupospartidasapis.entities;

import org.junit.jupiter.api.Test;

import java.util.Set;
import java.util.TreeSet;

import static org.assertj.core.api.Assertions.assertThat;

public class EntradaTests {

    private static final String SELVA = "selva";
    private static final String TOPO = "topo";
    private static final String GRUPO1 = "G1";
    private Entrada entrada(String posicao) {
        return Entrada.builder()
                .posicao(posicao)
                .grupo(Grupo.builder().nomeGrupo(GRUPO1).build())
                .build();
    }

    @Test
    public void posicaoIgual() {

        Entrada entradaSelva1 = entrada(SELVA);
        Entrada entradaSelva2 = entrada(SELVA);

        assertThat(entradaSelva1).isEqualTo(entradaSelva2);
    }
    @Test
    public void posicaoDiferente() {
        Entrada entradaSelva1 = entrada(SELVA);
        Entrada entradaSelva2 = entrada(TOPO);

        assertThat(entradaSelva1).isNotEqualTo(entradaSelva2);
    }
    @Test
    public void compareTo() {
        Set<Entrada> entradas = new TreeSet<>();

        Entrada entradaSelva1 = entrada(SELVA);
        entradas.add(entradaSelva1);
        Entrada entradaSelva2 = entrada(TOPO);
        entradas.add(entradaSelva2);

        assertThat(entradas.iterator().next()).isEqualTo(entradaSelva1);
    }

}
