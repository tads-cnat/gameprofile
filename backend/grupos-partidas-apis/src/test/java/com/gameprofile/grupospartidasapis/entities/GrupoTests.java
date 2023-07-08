/*package com.gameprofile.grupospartidasapis.entities;

import org.junit.jupiter.api.Test;

import java.util.Set;
import java.util.TreeSet;

import static org.assertj.core.api.Assertions.assertThat;


public class GrupoTests {
    private static final String GRUPO1 = "G1";
    private static final String GRUPO2 = "G2";
    private static final boolean VERDADEIRO = true;
    private static final boolean FALSO = false;

    @Test
    public void nomeGrupoIgual() {
        assertThat(Grupo.builder().nome(GRUPO1).build())
                .isEqualTo(Grupo.builder().nome(GRUPO1).build());
    }

    @Test
    public void nomeGrupoDiferente() {
        assertThat(Grupo.builder().nome(GRUPO1).build())
                .isNotEqualTo(Grupo.builder().nome(GRUPO2).build());
    }

    @Test
    public void compareTo() {
        Set<Grupo> grupos = new TreeSet<>();

        Grupo g2 = Grupo.builder().nome(GRUPO2).build();
        grupos.add(g2);
        Grupo g1 = Grupo.builder().nome(GRUPO1).build();
        grupos.add(g1);

        assertThat(grupos.iterator().next()).isEqualTo(g1);
    }
}
*/