package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity(name = "grupos")
@Data
public class Grupo {
    @Id
    @Column(name = "id_grupo")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idGrupo;

    @Column(name = "nome")
    @NotNull(message="{NotNull.Grupo.nomeGrupo}")
    private String nomeGrupo;

    @Column
    @NotNull(message="{NotNull.Grupo.bloqueado}")
    private Boolean bloqueado;

    @Column(name = "id_criador")
    @NotNull(message="{NotNull.Grupo.idCriador}")
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
