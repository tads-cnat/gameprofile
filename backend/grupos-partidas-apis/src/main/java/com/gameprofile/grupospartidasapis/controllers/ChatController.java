package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.entities.ChatMessage;
import com.gameprofile.grupospartidasapis.repositories.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private final ChatRepository repository;

    @Autowired
    public ChatController(ChatRepository repository) {
        this.repository = repository;
    }

    @MessageMapping("/chat") 
    @SendTo("/topic/messages") 
    public ChatMessage handleMessage(@Payload ChatMessage message) {
        ChatMessage savedMessage = repository.save(message);
        return savedMessage;
    }
}
