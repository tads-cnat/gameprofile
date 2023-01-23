import api  from './api.json'
import axios from 'axios'; 

export async function createGroup (grupo) {

    try{
        axios.post( api.api_url + 'grupos', grupo, {
            headers: {
                'Content-Type': 'application/json',
                'Transfer-Encoding': 'chunked'
                }
        }).then(response =>{
            if(response.status === 200){
                return response.json()
            }else{
                throw new Error('Não foi possível criar o grupo')
            }
        }).catch(error => {
            console.log(error)
            return error
        })
    }catch(error){
        return error
    }

}

export async function getGroups () {
    axios({
        method: 'get',
        url: api.api_url + 'grupos',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Transfer-Encoding': 'chunked'
          }
    }).then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Não foi possível buscar os grupos')
        }
    }).catch(error => {
        return error
    })
}