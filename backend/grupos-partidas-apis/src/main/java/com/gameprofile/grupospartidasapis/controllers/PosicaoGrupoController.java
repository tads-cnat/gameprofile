package com.gameprofile.grupospartidasapis.controllers;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;
import java.util.List;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import com.gameprofile.grupospartidasapis.entities.PosicaoGrupo;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.PosicaoGrupoRepository;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
@RestController
@RequestMapping(value = "/posicoesgrupos")
public class PosicaoGrupoController {
    private final PosicaoGrupoRepository posicaoGrupoRepository;
    private final GrupoRepository grupoRepository;
    private final JogadorRepository jogadorRepository;
    @Autowired
    public PosicaoGrupoController(PosicaoGrupoRepository posicaoGrupoRepository, GrupoRepository grupoRepository, JogadorRepository jogadorRepository){
        this.posicaoGrupoRepository = posicaoGrupoRepository;
        this.grupoRepository = grupoRepository;
        this.jogadorRepository = jogadorRepository;
    }
    @PostMapping("/{grupoId}/jogador/{jogadorId}/{posicao}")
    public ResponseEntity<String> entrarPosicaoGrupo( @PathVariable Integer grupoId,@PathVariable Integer jogadorId,@PathVariable String posicao){
        Optional<Grupo> grupoOptional = grupoRepository.findById(grupoId);
        Optional<Jogador> jogadorOptional = jogadorRepository.findById(jogadorId);

        if (grupoOptional.isEmpty() | jogadorOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("JOgador não encontrado");
        }
        Grupo grupo = grupoOptional.get();
        Jogador jogador = jogadorOptional.get();
        List <PosicaoGrupo> posicoesGrupo = posicaoGrupoRepository.findByGrupoAndStatus(grupo, false);
        PosicaoGrupo posicaoGrupo = posicoesGrupo.stream()
            .filter(pg -> {
                switch (posicao) {
                    case "topo":
                        return grupo.getTopo().equals(pg);
                    case "selva":
                        return grupo.getSelva().equals(pg);
                    case "meio":
                        return grupo.getMeio().equals(pg);
                    case "atirador":
                        return grupo.getAtirador().equals(pg);
                    case "suporte":
                        return grupo.getSuporte().equals(pg);
                    default:
                        return false;
                }
            })
            .findFirst()
            .orElse(null);

        if (posicaoGrupo == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Posição não encontrada no grupo!");
        }
        if(posicaoGrupo.getJogador() != null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A posição já está ocupada!");
        }
        if(!posicaoValida(grupo, posicao)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Posição inválida!");
        }
        posicaoGrupo.setJogador(jogador);
        posicaoGrupo.setStatus(true);
        posicaoGrupoRepository.save(posicaoGrupo);
        return ResponseEntity.status(HttpStatus.OK).body("Jogador adicionado com sucesso!");
    }
    private boolean posicaoValida(Grupo grupo, String posicao){
        switch(posicao){
            case "topo":
                return grupo.getTopo() != null;
            case "selva":
                return grupo.getSelva() != null;
            case "meio":
                return grupo.getMeio() != null;
            case "atirador":
                return grupo.getAtirador() != null;
            case "suporte":
                return grupo.getSuporte() != null;
            default:
                return false;
        }
    }


}
