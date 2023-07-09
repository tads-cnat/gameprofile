/*package test.com.gameprofile.grupospartidasapis.repositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import java.util.Optional;

@Component
public class JogadorFactory {

    @Autowired
    private JogadorRepository jogadorRepository;

    public Jogador jogador(String nickname) {
        Optional<Jogador> jogadorOptional = this.jogadorRepository.findByNickname(nickname);
        Jogador jogador;
        if (jogadorOptional.isPresent()) {
            jogador = jogadorOptional.get();
        } else {
            jogador = Jogador.builder().nickname(nickname).build();
            this.jogadorRepository.save(jogador);
        }
        return jogador;
    }
}

*/