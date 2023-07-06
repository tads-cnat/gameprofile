/*package test.com.gameprofile.grupospartidasapis.services;

import com.gameprofile.grupospartidasapis.GruposPartidasApisApplication;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import test.com.gameprofile.grupospartidasapis.repositories.JogadorFactory;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

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
		Jogador jogador = this.jogadorFactory.banco();

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

}
*/
