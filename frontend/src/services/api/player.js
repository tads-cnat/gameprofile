import api from "./api.json";
import axios from "axios";

export async function getPlayer(player) {
  return axios({
    method: "get",
    url: api.api_url + "jogadores/" + player,
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Transfer-Encoding": "chunked",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Não foi possível buscar o jogador");
      }
    })
    .catch((error) => {
      return error;
    });
}
