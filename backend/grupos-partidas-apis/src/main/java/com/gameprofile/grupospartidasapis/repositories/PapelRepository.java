package com.gameprofile.grupospartidasapis.repositories;
import com.gameprofile.grupospartidasapis.entities.Papel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PapelRepository extends JpaRepository<Papel, Integer>  {
    Papel findByNickname(String nickname);
    
}