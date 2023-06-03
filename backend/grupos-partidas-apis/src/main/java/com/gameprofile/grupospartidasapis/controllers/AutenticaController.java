package com.gameprofile.grupospartidasapis.controllers;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import com.gameprofile.grupospartidasapis.dto.JogadorDTO;
import com.gameprofile.grupospartidasapis.entities.Jogador;
import com.gameprofile.grupospartidasapis.services.JogadorService;

import org.springframework.security.access.method.P;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;

@Controller
public class AutenticaController{
    private JogadorService jogadorService;

    public AutenticaController(JogadorService jogadorService){
        this.jogadorService = jogadorService;
    }

    @GetMapping("/index")
    public String home(){
        return "index";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
    @PostMapping("/login")
    public String processarLogin(@ModelAttribute("jogador") JogadorDTO jogadorDTO, BindingResult result, HttpServletRequest request){
        Jogador jogador = jogadorService.findJogadorByEmail(jogadorDTO.getEmail());
        System.out.println("Jogador encontrado: " + jogador);
        if (jogador == null || !jogador.getSenha().equals(jogadorDTO.getSenha())) {
            result.rejectValue("email", "", "Email ou senha inválidos");
            return "login";
    }
    HttpSession session = request.getSession();
    session.setAttribute("jogador", jogador);
    return "redirect:/jogadoresRegistrados";
    }

    @GetMapping("/registro")
    public String mostrarFormularioDeRegistro(Model model){
        JogadorDTO jogadorDTO = new JogadorDTO();
        model.addAttribute("jogador", jogadorDTO);
        return "registro";
    }
    
    @PostMapping("registro/save")
    public String registrado(@Valid @ModelAttribute("jogador") JogadorDTO jogadorDTO, BindingResult result, Model model){
        Jogador jogadorExistente = jogadorService.findJogadorByEmail(jogadorDTO.getEmail());

        if(jogadorExistente != null && jogadorExistente.getEmail() != null && !jogadorExistente.getEmail().isEmpty()){
            result.rejectValue("email", "", "Já existe um jogador cadastrado com esse email");
        } 
        if(result.hasErrors()){
            model.addAttribute("jogador", jogadorDTO);
            return "/registro";
        }
        jogadorService.saveJogador(jogadorDTO);
        return "redirect:/registro?success";
    }
        @GetMapping("/jogadoresRegistrados")
        public String jogadores(Model model){
            List<JogadorDTO> jogadores = jogadorService.findAllJogadores();
            model.addAttribute("jogadores", jogadores);
            return "jogadores";
        }
    }