package com.gameprofile.grupospartidasapis.clients;

import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandler;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import com.gameprofile.grupospartidasapis.entities.ChatMessage;
import java.lang.System;
import java.util.concurrent.ExecutionException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


@Component
public class ChatClient {
    private static final String URL = "ws://ruan-franklin-sturdy-giggle-v74wjprqgvq2x674-8080.preview.app.github.dev/chatMessages";
    private WebSocketStompClient client;

    public ChatClient(){
        this.client = new WebSocketStompClient(new StandardWebSocketClient());
        this.client.setMessageConverter(new MappingJackson2MessageConverter());

    }
    public void connectAndSubscribe() {
       StompSessionHandler sessionHandler = new MyStompSessionHandler();
       try{
        StompSession session = this.client.connect(URL, sessionHandler).get();
        session.subscribe("/topic/messages", new MyStompFrameHandler());
       }catch(InterruptedException | ExecutionException e){
           throw new RuntimeException(e.getMessage(), e);
       }
    }

    public static class MyStompSessionHandler extends StompSessionHandlerAdapter {
        @Override
        public void afterConnected(StompSession session, StompHeaders connectedHeaders) {
            session.subscribe("/topic/messages", new MyStompFrameHandler());
        }
    }

    private static class MyStompFrameHandler implements StompFrameHandler {
        private static final Logger logger = LogManager.getLogger(MyStompFrameHandler.class);
        @Override
        public Class<?> getPayloadType(StompHeaders headers) {
            return ChatMessage.class;
        }

        @Override
        public void handleFrame(StompHeaders headers, Object payload) {
            ChatMessage chatMessage = (ChatMessage) payload;
            logger.info("Received message: {}", chatMessage.getConteudo());

        }
    }
    public void sendMessage(String conteudo){
        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setConteudo(conteudo);

        StompSessionHandler sessionHandler = new MyStompSessionHandler();
        try{
            StompSession session = client.connect(URL, sessionHandler).get();
            session.send("/app/chat", chatMessage);
        }catch(InterruptedException | ExecutionException e){
            throw new RuntimeException(e.getMessage(), e);
        }

    }
}

