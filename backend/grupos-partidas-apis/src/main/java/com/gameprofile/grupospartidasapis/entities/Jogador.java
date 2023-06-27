package com.gameprofile.grupospartidasapis.entities;

import java.time.LocalDate;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.gameprofile.grupospartidasapis.models.Message;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Entity
@Builder
@ToString
@Data
public class Jogador {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotNull(message="{NotNull.Jogador.nickname}")
    private String nickname;
    @NotNull(message="{NotNull.Jogador.nome}")
    private String nome;
    @NotNull(message="{NotNull.Jogador.email}")
    private String email;
    @NotNull(message="{NotNull.Jogador.senha}")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;
    private LocalDate nascimento;
    private LocalDate entrouEm;
    private LocalDate editadoEm;
    private Integer idLol;

}
