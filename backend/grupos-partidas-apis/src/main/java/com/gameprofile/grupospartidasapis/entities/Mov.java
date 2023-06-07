package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Time;
import java.util.Date;

@Entity(name = "mov_grupos")
@Data
public class Mov {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message="{NotNull.Mov.nome}")
    private String nome;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    private Date data;

    private Time horario;

    @NotNull(message="{NotNull.Mov.bloqueado}")
    private Boolean bloqueado;

    @NotNull(message="{NotNull.Mov.ranqueada}")
    private Boolean ranqueada;

    @NotNull(message="{NotNull.Mov.idCriador}")
    private Integer idCriador;

    private Integer topo;

    private Integer selva;

    private Integer meio;

    private Integer suporte;

    private Integer atirador;
}