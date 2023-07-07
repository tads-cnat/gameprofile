package com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import com.gameprofile.grupospartidasapis.services.CrudService;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class GrupoService extends CrudService<Grupo, Integer> {

    @Autowired
    public void setRepository(GrupoRepository grupoRepository) {
        super.setRepository(grupoRepository);
    }

    public Grupo update(Grupo grupo){
        //Verifica se o grupo existe no banco de dados
        Optional<Grupo> grupoOptional = this.findById(grupo.getId());
        if(grupoOptional.isPresent()){
            //Atualiza o grupo
            Grupo grupoAtualizado = grupoOptional.get();
            grupoAtualizado.setNome(grupo.getNome());
            //Salva o grupo atualizado no banco de dados
            return super.save(grupoAtualizado);
        }else{
            return null;
    }
}
}
