package com.gameprofile.grupospartidasapis.entities;

import java.util.Date;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Entity(name= "jogadores")
@Data
public class Jogador{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idJ; 
    
    @NotNull(message="{NotNull.Jogador.nickname}")
    private String nickname;

    @NotNull(message="{NotNull.Jogador.nome}")
    private String nome;

    @NotNull(message="{NotNull.Jogador.email}")
    private String email;

    @NotNull(message="{NotNull.Jogador.senha}")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    private Date nascimento;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    private Date entrouEm;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    private Date editadoEm;

    private Integer idLol;

    @OneToMany(mappedBy = "jogador")
    private List<ChatMessage > chatMessages;
}
