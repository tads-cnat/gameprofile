package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity(name = "mov_grupos")
@Data
public class Mov {
    @Id
    @Column(name = "id_grupo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idGrupo;
    @Column
    @NotNull(message="{NotNull.Mov.nome}")
    private String nome;
    @Column
    private String data;
    @Column
    private String horario;
    @Column
    @NotNull(message="{NotNull.Mov.bloqueada}")
    private Boolean bloqueada;
    @Column
    @NotNull(message="{NotNull.Mov.ranqueada}")
    private Boolean ranqueada;
    @Column(name = "id_criador")
    @NotNull(message="{NotNull.Mov.idCriador}")
    private Integer idCriador;
    @Column
    private Integer topo;
    @Column
    private Integer selva;
    @Column
    private Integer meio;
    @Column
    private Integer suporte;
    @Column
    private Integer atirador;
}