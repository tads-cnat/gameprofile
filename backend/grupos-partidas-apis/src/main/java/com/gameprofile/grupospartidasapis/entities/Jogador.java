package com.gameprofile.grupospartidasapis.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity(name= "jogadores")
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

    public Integer getIdJogador() {
        return idJogador;
    }

    public void setIdJogador(Integer idJogador) {
        this.idJogador = idJogador;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public Date getEntrouEm() {
        return entrouEm;
    }

    public void setEntrouEm(Date entrouEm) {
        this.entrouEm = entrouEm;
    }

    public Date getEditadoEm() {
        return editadoEm;
    }

    public void setEditadoEm(Date editadoEm) {
        this.editadoEm = editadoEm;
    }

    public Integer getIdLol() {
        return idLol;
    }

    public void setIdLol(Integer idLol) {
        this.idLol = idLol;
    }
}
