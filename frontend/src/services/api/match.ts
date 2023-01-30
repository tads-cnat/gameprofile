import api from "./api.json";
import axios from "axios";
import { Match } from "../../entities/match";

export async function getMatches(): Promise<Match[]> {
    try {
        const response = await axios.get<Match[]>(api.api_url + "partidas", {
            headers: {
              "Content-Type": "application/json",
            },
        })
        
        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject(new Error("Não foi possível buscar as partidas"));
    }
}