package com.gameprofile.grupospartidasapis.repositories;
import com.gameprofile.grupospartidasapis.entities.PosicaoGrupo;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PosicaoGrupoRepository  extends JpaRepository<PosicaoGrupo, Integer>{
        List<PosicaoGrupo> findByGrupoAndStatus(Grupo grupo, boolean status);
}
