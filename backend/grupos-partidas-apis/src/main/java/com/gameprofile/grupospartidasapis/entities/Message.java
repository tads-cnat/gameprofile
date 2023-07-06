package com.gameprofile.grupospartidasapis.entities;

import java.time.LocalDateTime;

import jakarta.persistence.*;
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
    @JoinColumn(nullable = false)
    private Jogador jogador;

}
