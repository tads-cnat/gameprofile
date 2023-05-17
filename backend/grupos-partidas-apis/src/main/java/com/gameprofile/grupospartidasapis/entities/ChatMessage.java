package com.gameprofile.grupospartidasapis.entities;
import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ChatMessage{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_chat")
    private Long id_chat;
    @Column(name = "remetente")
    private String remetente;
    @Column(name = "conteudo")
    private String conteudo;
    @Column(name = "data_envio")
    private LocalDateTime dataEnvio; 
    @ManyToOne
    @JoinColumn(name = "id_jogador", referencedColumnName = "id_jogador")
    private Jogador jogador;
    @ManyToOne
    @JoinColumn(name = "id_grupo", referencedColumnName = "id_grupo")
    private Grupo grupo;


    public ChatMessage(Long id_chat, String remetente, String conteudo, LocalDateTime dataEnvio, Jogador jogador) {
        this.id_chat = id_chat;
        this.remetente = remetente;
        this.conteudo = conteudo;
        this.dataEnvio = dataEnvio;
        this.jogador = jogador;

}

    public ChatMessage() {
    }

    public Long getIdChat() {
        return id_chat;
    }

    public void setIdChat(Long id_chat) {
        this.id_chat = id_chat;
    }

    public String getRemetente() {
        return remetente;
    }

    public void setRemetente(String remetente) {
        this.remetente = remetente;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public LocalDateTime getDataEnvio() {
        return dataEnvio;
    }

    public void setDataEnvio(LocalDateTime dataEnvio) {
        this.dataEnvio = dataEnvio;
    }

    public Jogador getJogador() {
        return jogador;
    }

    public void setJogador(Jogador jogador){
        this.jogador = jogador;
    }

}