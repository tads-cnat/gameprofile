import api from "./api.json";
import axios from "axios";
import { Player } from "../../entities/player";

export async function getPlayer(playerId: number): Promise<Player> {
    try {
        const response = await axios.get<Player>(api.api_url + "jogadores/" + playerId, {
            headers: {
              "Content-Type": "application/json",
              "Transfer-Encoding": "chunked",
            },
        })
        
        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject(new Error("Não foi possível buscar o jogador"));
    }
}