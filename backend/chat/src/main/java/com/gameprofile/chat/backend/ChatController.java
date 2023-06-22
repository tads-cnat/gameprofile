package com.gameprofile.chat.backend;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
public class ChatController {

    private SimpMessagingTemplate smt;

    @MessageMapping("/message")
    @SendTo("/chat-room/public")
    private MessageModel receivePublicMessage(@Payload MessageModel message) {
        return message;
    }
    
    @MessageMapping("/private-message")
    public MessageModel receivePrivateMessage(@Payload MessageModel message) {
        smt.convertAndSendToUser(message.getMessage(), "/private", message);
        return message;
    }

}
