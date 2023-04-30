package com.gameprofile.grupospartidasapis.controllers;
import com.gameprofile.grupospartidasapis.entities.Partida;
import com.gameprofile.grupospartidasapis.repositories.PartidaRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/partidas")
public class PartidaController extends CustomController<Partida, Integer, PartidaRepository> {

    public PartidaController(PartidaRepository repository) {
        super(repository);
    }

    @GetMapping("/{id}")
    public Partida findById(@PathVariable Integer id) {
        return super.findById(id, getRepository(), null);
    }

    @GetMapping
    public List<Partida> findAll() {
        return getRepository().findAll();

}

    @PostMapping
    public Partida save(@RequestBody Partida partida) {
        return super.save(partida, getRepository());
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id) {
        getRepository().deleteById(id);
}


    @PutMapping("/{id}")
    public Partida update(@PathVariable Integer id, @RequestBody Partida partida) {
        return super.update(id, partida, getRepository());
    }
}
