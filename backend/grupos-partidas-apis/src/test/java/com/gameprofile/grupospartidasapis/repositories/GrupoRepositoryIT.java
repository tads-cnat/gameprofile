package test.com.gameprofile.grupospartidasapis.repositories;

import org.springframework.beans.factory.annotation.Autowired;

import com.gameprofile.grupospartidasapis.GruposPartidasApisApplication;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = GruposPartidasApisApplication.class, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class GrupoRepositoryIT {

    @Autowired
    private GrupoRepository grupoRepository;

    @Autowired
    private GrupoFactory grupoFactory;

    @Test
    public void repositorioNaoEhNulo() {
        assertThat(this.grupoRepository)
            .isNotNull();
    }

    @Test
    public void deletarUm() {
        // cria o ambiente de teste
        Grupo grupo = this.grupoFactory.grupo("GRUPO UNICO");

        // executa a operacao a ser testada
        this.grupoRepository.delete(grupo);

        // verifica o efeito da execucao da operacao a ser testada
        assertThat(this.grupoRepository.findById(grupo.getId()).isPresent())
            .isFalse();
    }

    @Test
    public void salvarUm() {
        // executa a operacao a ser testada
        Grupo grupo = this.grupoFactory.grupo("GRUPO UNICO");

        // verifica o efeito da execucao da operacao a ser testada
        assertThat(grupo.getId())
            .isNotNull();
    }
    @Test
    public void recuperarUm(){
        // cria o ambiente de teste
        Grupo grupo = this.grupoFactory.grupo("GRUPO UNICO");
        // executa a operacao a ser testada
        Grupo grupoRecuperado = this.grupoRepository.findById(grupo.getId()).get();
        // verifica o efeito da execucao da operacao a ser testada
        assertThat(grupoRecuperado.getId())
            .isEqualTo(grupo.getId());
    }
    @Test
    public void atualizarUm(){
        // cria o ambiente de teste
        Grupo grupo = this.grupoFactory.grupo("GRUPO UNICO");
        // executa a operacao a ser testada
        Grupo grupoRecuperado = this.grupoRepository.findById(grupo.getId()).get();
        // verifica o efeito da execucao da operacao a ser testada
        assertThat(grupoRecuperado.getId())
            .isEqualTo(grupo.getId());
    }


}