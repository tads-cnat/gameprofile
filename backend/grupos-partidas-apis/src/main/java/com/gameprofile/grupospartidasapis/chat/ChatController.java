package com.gameprofile.grupospartidasapis.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private SimpMessagingTemplate smt;

    public ChatController(SimpMessagingTemplate smt) {
        this.smt = smt;
    }

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    private MessageEntity receivePublicMessage(@Payload MessageEntity message) {
        return message;
    }

    @MessageMapping("private-message")
    public MessageEntity receivePrivateMessages(@Payload MessageEntity message) {
        smt.convertAndSendToUser(message.getReceiver(), "/private", message);
        return message;
    }

}
