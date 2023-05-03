package com.gameprofile.grupospartidasapis.entities;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity(name = "entradas")
public class Entrada {
    @Id
    @Column(name = "id_solicitacao")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSolicitacao;

    @Column(name = "id_grupo")
    private Integer idGrupo;

    @Column(name = "id_jogador")
    @NotNull(message="{NotNull.Entrada.idJogador}")
    private Integer idJogador;
    @Column
    @NotNull(message="{NotNull.Entrada.status}")
    private Boolean status;

    public Integer getIdSolicitacao() {
        return idSolicitacao;
    }

    public void setIdSolicitacao(Integer idSolicitacao) {
        this.idSolicitacao = idSolicitacao;
    }

    public Integer getIdGrupo() {
        return idGrupo;
    }

    public void setIdGrupo(Integer idGrupo) {
        this.idGrupo = idGrupo;
    }

    public Integer getIdJogador() {
        return idJogador;
    }

    public void setIdJogador(Integer idJogador) {
        this.idJogador = idJogador;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
