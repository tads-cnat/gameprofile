package com.gameprofile.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.gameprofile.chat.model.MessageModel;

@Controller
public class ChatController {

    @MessageMapping("/message")
    @SendTo("/chat-room/public")
    private MessageModel receivePublicMessage(@Payload MessageModel message) {
        return message;
    }
    
    // Adicionar método de receber message -> 14:33 do vídeo

}
