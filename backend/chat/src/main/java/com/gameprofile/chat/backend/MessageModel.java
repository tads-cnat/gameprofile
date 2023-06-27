package com.gameprofile.chat.backend;

import java.time.LocalDateTime;

import gameprofile.backend.grupos-partidas-apis.src.main.com.gameprofile.grupospartidasapis.entities.Jogador;

import jakarta.persistence.ManyToOne;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MessageModel {

    private String senderName;
    private String receiverName;
    private String message;
    private LocalDateTime dateTime;
    private Status status;

    @ManyToOne
    private Jogador jogador;

}
