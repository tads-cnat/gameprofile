package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Time;
import java.util.Date;

@Entity(name = "mov_grupos")
public class Mov {
    @Id
    @Column(name = "id_grupo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idGrupo;
    @Column
    @NotNull(message="{NotNull.Mov.nome}")
    private String nome;
    @Column
    @DateTimeFormat(pattern = "dd/mm/yyyy")
    private Date data;
    @Column
    private Time horario;
    @Column
    @NotNull(message="{NotNull.Mov.bloqueado}")
    private Boolean bloqueado;
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

    public Integer getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Time getHorario() {
        return horario;
    }

    public void setHorario(Time horario) {
        this.horario = horario;
    }

    public Boolean getBloqueado() {
        return bloqueado;
    }

    public void setBloqueado(Boolean bloqueado) {
        this.bloqueado = bloqueado;
    }

    public Boolean getRanqueada() {
        return ranqueada;
    }

    public void setRanqueada(Boolean ranqueada) {
        this.ranqueada = ranqueada;
    }

    public Integer getIdCriador() {
        return idCriador;
    }

    public void setIdCriador(Integer idCriador) {
        this.idCriador = idCriador;
    }

    public Integer getTopo() {
        return topo;
    }

    public void setTopo(Integer topo) {
        this.topo = topo;
    }

    public Integer getSelva() {
        return selva;
    }

    public void setSelva(Integer selva) {
        this.selva = selva;
    }

    public Integer getMeio() {
        return meio;
    }

    public void setMeio(Integer meio) {
        this.meio = meio;
    }

    public Integer getSuporte() {
        return suporte;
    }

    public void setSuporte(Integer suporte) {
        this.suporte = suporte;
    }

    public Integer getAtirador() {
        return atirador;
    }

    public void setAtirador(Integer atirador) {
        this.atirador = atirador;
    }
}