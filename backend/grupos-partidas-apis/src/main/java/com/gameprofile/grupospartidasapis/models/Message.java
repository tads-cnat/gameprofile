package com.gameprofile.chat.backend;

import java.time.LocalDateTime;

import com.gameprofile.grupospartidasapis.entities.Jogador;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
//@Entity
public class Message {

    private String senderName;
    private String receiverName;
    private String message;
    private LocalDateTime dateTime;
    private Status status;

    @ManyToOne
    private Jogador jogador;

}
