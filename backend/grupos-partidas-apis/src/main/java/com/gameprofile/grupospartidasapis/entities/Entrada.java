package com.gameprofile.grupospartidasapis.entities;

import com.gameprofile.grupospartidasapis.base.Identifiable;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity(name = "entradas")
@Data
public class Entrada implements Identifiable<Integer>{
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

    @Override
    public Integer getId() {
        return idSolicitacao;
    }

    @Override
    public void setId(Integer id) {
        this.idSolicitacao=id;
    }
}
