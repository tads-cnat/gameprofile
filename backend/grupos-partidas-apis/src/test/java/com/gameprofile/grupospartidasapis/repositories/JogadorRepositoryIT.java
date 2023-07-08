/*package test.com.gameprofile.grupospartidasapis.repositories;

import org.springframework.beans.factory.annotation.Autowired;

import com.gameprofile.grupospartidasapis.GruposPartidasApisApplication;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import com.gameprofile.grupospartidasapis.repositories.JogadorRepository;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = GruposPartidasApisApplication.class, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class JogadorRepositoryIT {

    @Autowired
    private JogadorRepository jogadorRepository;

    @Autowired
    private JogadorFactory jogadorFactory;

    @Test
    public void repositorioNaoEhNulo() {
        assertThat(this.jogadorRepository)
            .isNotNull();
    }

    @Test
    public void deletarUm() {
        // cria o ambiente de teste
        Jogador jogador = this.jogadorFactory.jogador("JOGADOR UNICO");

        // executa a operacao a ser testada
        this.jogadorRepository.delete(jogador);

        // verifica o efeito da execucao da operacao a ser testada
        assertThat(this.jogadorRepository.findById(jogador.getId()).isPresent())
            .isFalse();
    }

    @Test
    public void salvarUm() {
        // executa a operacao a ser testada
        Jogador jogador = this.jogadorFactory.jogador("JOGADOR UNICO");

        // verifica o efeito da execucao da operacao a ser testada
        assertThat(jogador.getId())
            .isNotNull();
    }
    @Test
    public void recuperarUm(){
        // cria o ambiente de teste
        Jogador jogador = this.jogadorFactory.jogador("JOGADOR UNICO");
        // executa a operacao a ser testada
        Jogador jogadorRecuperado = this.jogadorRepository.findById(jogador.getId()).get();
        // verifica o efeito da execucao da operacao a ser testada
        assertThat(jogadorRecuperado.getId())
            .isEqualTo(jogador.getId());
    }
    @Test
    public void atualizarUm(){
        // cria o ambiente de teste
        Jogador jogador = this.jogadorFactory.jogador("JOGADOR UNICO");
        // executa a operacao a ser testada
        Jogador jogadorRecuperado = this.jogadorRepository.findById(jogador.getId()).get();
        // verifica o efeito da execucao da operacao a ser testada
        assertThat(jogadorRecuperado.getId())
            .isEqualTo(jogador.getId());
    }


}*/