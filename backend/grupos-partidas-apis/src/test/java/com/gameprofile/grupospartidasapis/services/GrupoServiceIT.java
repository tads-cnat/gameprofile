package test.com.gameprofile.grupospartidasapis.services;
import java.util.stream.StreamSupport;
import java.util.stream.Collectors;
import com.gameprofile.grupospartidasapis.GruposPartidasApisApplication;
import com.gameprofile.grupospartidasapis.entities.Grupo;
import test.com.gameprofile.grupospartidasapis.repositories.GrupoFactory;
import com.gameprofile.grupospartidasapis.repositories.GrupoRepository;
import com.gameprofile.grupospartidasapis.services.GrupoService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;
import java.util.List;
import org.junit.jupiter.api.extension.ExtendWith;


@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = GruposPartidasApisApplication.class, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class GrupoServiceIT {

    @Autowired
    private GrupoService grupoService;

    @Autowired
    private GrupoFactory grupoFactory;

    @Test
    public void repositorioNaoEhNulo() {
        assertThat(this.grupoService).isNotNull();
    }

    @Test
    public void salvarUm() {
        Grupo grupo = this.grupoFactory.grupo("nome");

        assertThat(this.grupoService.findById(grupo.getId()).get())
            .isEqualTo(grupo);
    }

    @Test
    public void deletarUm() {
        Grupo grupo = this.grupoFactory.grupo("GRUPO UNICO DO SERVICEIT");

        this.grupoService.delete(grupo);

        assertThat(this.grupoService.findById(grupo.getId()).isPresent())
            .isFalse();
    }
    @Test
    public void atualizarUm(){
        //Cria o ambiente de teste
        Grupo grupo = this.grupoFactory.grupo("GRUPO UNICO DO SERVICEIT");
        //Atualiza os dados do grupo
        grupo.setNome("GRUPO ATUALIZADO");

        //Executa a operação a ser testada
        Grupo grupoAtualizado = this.grupoService.update(grupo);
        
        //Verifica o efeito da execução da operação a ser testada
        assertThat(grupoAtualizado.getNome()).isEqualTo("GRUPO ATUALIZADO");
    }

    public void listarGrupos(){
        //Cria o ambiente de teste
        Grupo grupo1 = this.grupoFactory.grupo("Grupo 1");
        Grupo grupo2 = this.grupoFactory.grupo("Grupo 2");
        Grupo grupo3 = this.grupoFactory.grupo("Grupo 3");
        //Executa a operação a ser testada
        List<Grupo> grupos = StreamSupport.stream(this.grupoService.findAll().spliterator(), false)
        .collect(Collectors.toList());
        // Verifica o efeito da execução da operação a ser testada
        assertThat(grupos).contains(grupo1, grupo2, grupo3);
    }
}