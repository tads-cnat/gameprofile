package com.gameprofile.chat.backend;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
    
}
