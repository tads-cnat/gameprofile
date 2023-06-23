package test.com.gameprofile.grupospartidasapis.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import java.util.Optional;

@Component
public class GrupoFactory {

    @Autowired
    private GrupoRepository grupoRepository;

    public Grupo grupo(String nome) {
        Optional<Grupo> grupoOptional = this.grupoRepository.findByNome(nome);
        Grupo grupo;
        if (grupoOptional.isPresent()) {
            grupo = grupoOptional.get();
        } else {
            grupo = Grupo.builder().nome(nome).build();
            this.grupoRepository.save(grupo);
        }
        return grupo;
    }
}