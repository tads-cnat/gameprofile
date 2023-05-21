package com.gameprofile.grupospartidasapis.controllers;
import com.gameprofile.grupospartidasapis.entities.Partida;
import com.gameprofile.grupospartidasapis.repositories.PartidaRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/partidas")
public class PartidaController extends CustomController<Partida, Integer, PartidaRepository> {
    public PartidaController(PartidaRepository repository){
        super(repository);
}
}
