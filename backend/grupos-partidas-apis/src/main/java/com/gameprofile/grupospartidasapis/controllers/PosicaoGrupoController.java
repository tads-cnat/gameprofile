package com.gameprofile.grupospartidasapis.controllers;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;
import java.util.List;
import java.util.Map;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import com.gameprofile.grupospartidasapis.entities.Grupo.PosicaoEscolhida;
import com.gameprofile.grupospartidasapis.entities.PosicaoGrupo;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.repositories.PosicaoGrupoRepository;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
@RestController
@RequestMapping(value = "/posicaogrupo")
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
    
    @PostMapping("/entrar")
    public ResponseEntity<String> entrarPosicaoGrupo(@RequestBody PosicaoGrupo novaposicaoGrupo) {
        Integer grupoId = novaposicaoGrupo.getGrupo().getId();
        Integer jogadorId = novaposicaoGrupo.getJogador().getId();
        String posicao = novaposicaoGrupo.getPosicaoEscolhida().toString();

    
        Optional<Grupo> grupoOptional = grupoRepository.findById(grupoId);
        Optional<Jogador> jogadorOptional = jogadorRepository.findById(jogadorId);
    
        if (grupoOptional.isEmpty() || jogadorOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Jogador não encontrado");
        }
    
        Grupo grupo = grupoOptional.get();
        Jogador jogador = jogadorOptional.get();
        PosicaoGrupo posicaoGrupo = null;
    
        try {
            PosicaoEscolhida posicaoEscolhida = PosicaoEscolhida.valueOf(posicao.toUpperCase());
            switch (posicaoEscolhida) {
                case TOPO:
                    posicaoGrupo = PosicaoGrupo.builder()
                        .grupo(grupo)
                        .jogador(jogador)
                        .posicaoEscolhida(PosicaoEscolhida.TOPO)
                        .build();
                    break;
                case SELVA:
                    posicaoGrupo = PosicaoGrupo.builder()
                        .grupo(grupo)
                        .jogador(jogador)
                        .posicaoEscolhida(PosicaoEscolhida.SELVA)
                        .build();
                    break;
                case MEIO:
                    posicaoGrupo = PosicaoGrupo.builder()
                        .grupo(grupo)
                        .jogador(jogador)
                        .posicaoEscolhida(PosicaoEscolhida.MEIO)
                        .build();
                    break;
                case ATIRADOR:
                    posicaoGrupo = PosicaoGrupo.builder()
                        .grupo(grupo)
                        .jogador(jogador)
                        .posicaoEscolhida(PosicaoEscolhida.ATIRADOR)
                        .build();
                    break;
                case SUPORTE:
                    posicaoGrupo = PosicaoGrupo.builder()
                        .grupo(grupo)
                        .jogador(jogador)
                        .posicaoEscolhida(PosicaoEscolhida.SUPORTE)
                        .build();
                    break;
                default:
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Posição inválida!");
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Posição inválida!");
        }
    
        if (posicaoGrupo == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Posição não encontrada no grupo!");
        }
    
        if (posicaoGrupo.getJogador() != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A posição já está ocupada!");
        }
    
        posicaoGrupo.setStatus(true);
        posicaoGrupoRepository.save(posicaoGrupo);
        return ResponseEntity.status(HttpStatus.OK).body("Jogador adicionado com sucesso!");
}


    @GetMapping("/{posicaoGrupoId}")
    public ResponseEntity<PosicaoGrupo> buscarPosicaoGrupo(@PathVariable Integer posicaoGrupoId) {
        Optional<PosicaoGrupo> posicaoGrupoOptional = posicaoGrupoRepository.findById(posicaoGrupoId);
    
        if (posicaoGrupoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
    
        PosicaoGrupo posicaoGrupo = posicaoGrupoOptional.get();
        return ResponseEntity.ok(posicaoGrupo);
    }

    //Get para todas as posições de todos os grupos
    @GetMapping
    public ResponseEntity<List<PosicaoGrupo>> buscarPosicaoGrupos() {
        List<PosicaoGrupo> posicaoGrupos = posicaoGrupoRepository.findAll();
        return ResponseEntity.ok(posicaoGrupos);
    }

}
