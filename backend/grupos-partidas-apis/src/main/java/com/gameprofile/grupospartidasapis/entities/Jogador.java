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
    @Column(name = "id_jogador")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idJogador; 
    
    @Column(name = "nickname")
    @NotNull(message="{NotNull.Jogador.nickname}")
    private String nickname;

    @Column(name = "nome")
    @NotNull(message="{NotNull.Jogador.nome}")
    private String nome;

    @Column(name = "email")
    @NotNull(message="{NotNull.Jogador.email}")
    private String email;

    @Column(name = "senha")
    @NotNull(message="{NotNull.Jogador.senha}")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @Column(name = "nascimento")
    private Date nascimento;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @Column(name = "entrou_em")
    private Date entrouEm;

    @DateTimeFormat(pattern = "dd/mm/yyyy")
    @Column(name = "editado_em")
    private Date editadoEm;

    @Column(name = "id_lol")
    private Integer idLol;

    @OneToMany(mappedBy = "jogador")
    private List<ChatMessage > chatMessages;
}