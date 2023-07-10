package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Grupo;
import com.gameprofile.grupospartidasapis.entities.Grupo.PosicaoEscolhida;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import org.hibernate.ObjectNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

public class GrupoTestController {
    @Mock
    private GrupoRepository grupoRepository;

    @InjectMocks
    private GrupoController grupoController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindAll() {
        // Cenário de teste
        List<Grupo> grupos = Collections.singletonList(new Grupo());
        when(grupoRepository.findAll()).thenReturn(grupos);

        // Executar o método a ser testado
        List<Grupo> resultado = grupoController.findAll();

        // Verificar o resultado
        assertThat(resultado).isEqualTo(grupos);
    }

    @Test
    public void testFindById() throws ObjectNotFoundException {
        // Cenário de teste
        Integer idGrupo = 1;
        Grupo grupo = new Grupo();
        when(grupoRepository.findById(idGrupo)).thenReturn(Optional.of(grupo));

        // Executar o método a ser testado
        Grupo resultado = grupoController.findById(idGrupo);

        // Verificar o resultado
        assertThat(resultado).isEqualTo(grupo);
    }

    @Test
    public void testInsert() {
        // Cenário de teste
        Grupo grupo = new Grupo();
        grupo.setPosicaoEscolhida(PosicaoEscolhida.TOPO);
        Grupo grupoSalvo = new Grupo();
        when(grupoRepository.save(grupo)).thenReturn(grupoSalvo);

        // Executar o método a ser testado
        Grupo resultado = grupoController.insert(grupo);

        // Verificar o resultado
        assertThat(resultado).isEqualTo(grupoSalvo);
    }
}
