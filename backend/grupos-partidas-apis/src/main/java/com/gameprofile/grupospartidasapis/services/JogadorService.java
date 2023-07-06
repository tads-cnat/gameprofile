package com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import com.gameprofile.grupospartidasapis.services.CrudService;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JogadorService extends CrudService<Jogador, Integer> {

    @Autowired
    public void setRepository(JogadorRepository jogadorRepository) {
        super.setRepository(jogadorRepository);
    }
    public Jogador update(Jogador jogador){
        //Verifica se o jogador existe no banco de dados
        Optional<Jogador> jogadorOptional = this.findById(jogador.getId());
        if(jogadorOptional.isPresent()){
            //Atualiza o jogador
            Jogador jogadorAtualizado = jogadorOptional.get();
            jogadorAtualizado.setNickname(jogador.getNickname());
            //Salva o jogador atualizado no banco de dados
            return super.save(jogadorAtualizado);
        }else{
            return null;
    }
}
}
