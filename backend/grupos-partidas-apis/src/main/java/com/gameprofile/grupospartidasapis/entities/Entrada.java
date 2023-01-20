package com.gameprofile.grupospartidasapis.entities;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity(name = "entradas")
@Data
public class Entrada {
    @Id
    @Column(name = "id_solicitacao")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSolicitacao;
    @ManyToMany
    @JoinColumn(name = "id_jogador")
    @Column(name = "id_grupo")
    private Grupo idGrupo;
    @ManyToMany
    @JoinColumn(name = "id_jogador")
    @Column(name = "id_jogador")
    private Jogador idJogador;
    @Column
    @NotNull(message="{NotNull.Mov.status}")
    private Boolean status;
}
