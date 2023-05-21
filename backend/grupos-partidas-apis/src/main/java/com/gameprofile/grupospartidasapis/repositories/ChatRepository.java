package com.gameprofile.grupospartidasapis.repositories;
import com.gameprofile.grupospartidasapis.entities.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends JpaRepository<ChatMessage, Long> {
}
