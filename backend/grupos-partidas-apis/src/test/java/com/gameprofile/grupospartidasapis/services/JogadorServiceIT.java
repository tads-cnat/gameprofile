package test.com.gameprofile.grupospartidasapis.services;
import com.gameprofile.grupospartidasapis.services.JogadorService;
import com.gameprofile.grupospartidasapis.GruposPartidasApisApplication;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import test.com.gameprofile.grupospartidasapis.repositories.JogadorFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import java.util.List;
import java.util.stream.StreamSupport;
import java.util.stream.Collectors;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = GruposPartidasApisApplication.class, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class JogadorServiceIT {

    @Autowired
    private JogadorService jogadorService;

    @Autowired
    private JogadorFactory jogadorFactory;

    @Test
    public void repositorioNaoEhNulo() {
        assertThat(this.jogadorService).isNotNull();
    }

    @Test
    public void salvarUm() {
        Jogador jogador = this.jogadorFactory.jogador("nickname");

        assertThat(this.jogadorService.findById(jogador.getId()).get())
            .isEqualTo(jogador);
    }

    @Test
    public void deletarUm() {
        Jogador jogador = this.jogadorFactory.jogador("JOGADOR UNICO DO SERVICEIT");

        this.jogadorService.delete(jogador);

        assertThat(this.jogadorService.findById(jogador.getId()).isPresent())
            .isFalse();
    }

    public void atualizarUm() {
        //Cria o ambiente de teste
        Jogador jogador = this.jogadorFactory.jogador("JOGADOR UNICO DO SERVICEIT");
        //Atualiza os dados do jogador
        jogador.setNickname("JOGADOR UNICO DO SERVICEIT ATUALIZADO");
        //Executa a operação a ser testada
        Jogador jogadorAtualizado = this.jogadorService.update(jogador);
        //Verifica se o jogador foi atualizado
        assertThat(jogadorAtualizado.getNickname()).isEqualTo("JOGADOR UNICO DO SERVICEIT ATUALIZADO");
    }

    public void listarJogadores() {
        //Cria o ambiente de teste
        Jogador jogador1 = this.jogadorFactory.jogador("JOGADOR1");
        Jogador jogador2 = this.jogadorFactory.jogador("JOGADOR2");
        Jogador jogador3 = this.jogadorFactory.jogador("JOGADOR3");
        //Executa a operação a ser testada
        List<Jogador> jogadores = StreamSupport.stream(this.jogadorService.findAll().spliterator(), false)
            .collect(Collectors.toList());
        //Verifica se a lista de jogadores contém os jogadores criados
        assertThat(jogadores).contains(jogador1, jogador2, jogador3);

    }
        

}



