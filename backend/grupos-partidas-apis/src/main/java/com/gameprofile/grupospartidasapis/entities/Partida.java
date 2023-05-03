package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity(name = "partidas")
public class Partida {

    @Id
    @Column(name = "id_partida")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idPartida;

    @Column(name = "ranqueada")
    private Boolean ranqueada;

    @Column(name = "status")
    @NotNull(message="{NotNull.Partida.status}")
    private String status;

    @DateTimeFormat(pattern = "hh:mm")
    @Column(name = "horario")
    @NotNull(message="{NotNull.Partida.horario}")
    private Date horario;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @Column(name = "data")
    @NotNull(message="{NotNull.Partida.data}")
    private Date data;

    @Column(name = "id_grupo")
    @NotNull(message="{NotNull.Partida.idGrupo}")
    private Integer idGrupo;


    public Integer getIdPartida() {
        return idPartida;
    }

    public void setIdPartida(Integer idPartida) {
        this.idPartida = idPartida;
    }

    public Boolean getRanqueada() {
        return ranqueada;
    }

    public void setRanqueada(Boolean ranqueada) {
        this.ranqueada = ranqueada;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getHorario() {
        return horario;
    }

    public void setHorario(Date horario) {
        this.horario = horario;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Integer getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }
}
