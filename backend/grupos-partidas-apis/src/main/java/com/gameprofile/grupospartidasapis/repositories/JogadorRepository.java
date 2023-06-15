package com.gameprofile.grupospartidasapis.repositories;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface JogadorRepository extends JpaRepository<Jogador, Integer> {
    Optional<Jogador> findByNickname(String nickname);
}