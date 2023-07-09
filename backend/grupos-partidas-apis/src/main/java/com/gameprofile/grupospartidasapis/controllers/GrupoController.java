package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.Grupo;
import com.gameprofile.grupospartidasapis.entities.Grupo.PosicaoEscolhida;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.entities.PosicaoGrupo;
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
            grupo.setPosicaoEscolhida(grupo.getPosicaoEscolhida()); // Definir a posição escolhida diretamente no grupo
    
            Grupo grupoSalvo = repository.save(grupo);

    // Define o criador do grupo na posição escolhida
            PosicaoGrupo posicaoGrupoEscolhida = null;

            switch (grupo.getPosicaoEscolhida()) {
                case TOPO:
                    posicaoGrupoEscolhida = PosicaoGrupo.builder()
                        .grupo(grupoSalvo)
                        .jogador(grupoSalvo.getCriador())
                        .posicaoEscolhida(PosicaoEscolhida.TOPO)
                        .build();  
                    break;
                case SELVA:
                    posicaoGrupoEscolhida = PosicaoGrupo.builder()
                        .grupo(grupoSalvo)
                        .jogador(grupoSalvo.getCriador())
                        .posicaoEscolhida(PosicaoEscolhida.SELVA)
                        .build();
                    break;
                case MEIO:
                    posicaoGrupoEscolhida = PosicaoGrupo.builder()
                        .grupo(grupoSalvo)
                        .jogador(grupoSalvo.getCriador())
                        .posicaoEscolhida(PosicaoEscolhida.MEIO)
                        .build();
                    break;
                case ATIRADOR:
                    posicaoGrupoEscolhida = PosicaoGrupo.builder()
                        .grupo(grupoSalvo)
                        .jogador(grupoSalvo.getCriador())
                        .posicaoEscolhida(PosicaoEscolhida.ATIRADOR)
                        .build();
                    break;
                case SUPORTE:
                    posicaoGrupoEscolhida = PosicaoGrupo.builder()
                        .grupo(grupoSalvo)
                        .jogador(grupoSalvo.getCriador())
                        .posicaoEscolhida(PosicaoEscolhida.SUPORTE)
                        .build();
                    break;
                default:
                    throw new IllegalArgumentException("Posição inválida: " + grupo.getPosicaoEscolhida());
    }

            if (posicaoGrupoEscolhida == null) {
                // Posição não encontrada no grupo
                throw new IllegalStateException("Posição não encontrada no grupo: " + grupo.getPosicaoEscolhida());
    }

            posicaoGrupoEscolhida.setJogador(grupoSalvo.getCriador());
            posicaoGrupoEscolhida.setStatus(true);

            return grupoSalvo;
}


}
