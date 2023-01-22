import api  from './api.json'

export async function createGroup (grupo) {
    const response = await fetch(`${api.api_url}/group`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(grupo)
    }).then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('Não foi possível cadastrar o grupo')
        }
    }).catch(error => {
        return error
    })
    return response
}