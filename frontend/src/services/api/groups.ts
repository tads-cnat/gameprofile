import api from "./api.json";
import axios from "axios";
import { Group } from "../../entities/group";

export async function createGroup(group: Omit<Group, "idCriador" | "idGrupo">): Promise<void> {
    try {
        const response = await axios.post(api.api_url + "grupos", group, {
            headers: {
              "Content-Type": "application/json",
            },
        })
        
        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject(new Error("Não foi possível criar o grupo"));
    }
}

export async function getGroups(): Promise<Group[]> {
    try {
        const response = await axios.get(api.api_url + "grupos", {
            headers: {
                "Content-Type": "application/json",
            },
        })

        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject(new Error("Não foi possível buscar os grupos"));
    }
}