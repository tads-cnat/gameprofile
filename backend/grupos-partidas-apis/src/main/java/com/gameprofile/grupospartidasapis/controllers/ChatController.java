package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.ChatMessage;
import com.gameprofile.grupospartidasapis.repositories.ChatRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;

@Controller
public class ChatController {

    private final ChatRepository repository;
    private final SimpMessagingTemplate messagingTemplate;

    @GetMapping("/conversa")
    public String conversa(){
        return "index";
    }

    public ChatController(ChatRepository repository, SimpMessagingTemplate messagingTemplate) {
        this.repository = repository;
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/chat")
    public void handleMessage(@Payload ChatMessage message) {
        message.setDataEnvio(LocalDateTime.now());
        ChatMessage savedMessage = repository.save(message);
        messagingTemplate.convertAndSend("/topic/messages", savedMessage);
    }
}
