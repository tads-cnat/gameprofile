package com.gameprofile.grupospartidasapis.repositories;
import com.gameprofile.grupospartidasapis.entities.Partida;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartidaRepository extends JpaRepository<Partida, Integer> {
    default PartidaRepository getRepository() {
        return this;
    }

}
