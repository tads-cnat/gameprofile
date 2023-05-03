package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
/**
 * Grupo is an Entity class that is used to store information about game groups.
 * 
 * It contains the following attributes:
 *  - idGrupo: the id of the group, generated automatically
 *  - nomeGrupo: the name of the group, not null
 *  - bloqueado: whether the group is blocked or not, not null
 *  - idCriador: the id of the creator of the group, not null
 *  - topo: the id of the top player
 *  - selva: the id of the jungle player
 *  - meio: the id of the middle player
 *  - suporte: the id of the support player
 *  - atirador: the id of the shooter player
 */

@Entity(name = "grupos")
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

    public Integer getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }

    public String getNomeGrupo() {
        return nomeGrupo;
    }

    public void setNomeGrupo(String nomeGrupo) {
        this.nomeGrupo = nomeGrupo;
    }

    public Boolean getBloqueado() {
        return bloqueado;
    }

    public void setBloqueado(Boolean bloqueado) {
        this.bloqueado = bloqueado;
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
