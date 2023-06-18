package com.gameprofile.grupospartidasapis.chat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.time.LocalDateTime;

import com.gameprofile.grupospartidasapis.entities.Jogador;

@Entity
@Data
public class MessageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String sender;
    private String receiver;
    private String message;
    private LocalDateTime date;
    private MessageStatus status;

    @ManyToOne
    private Jogador jogador;

}
