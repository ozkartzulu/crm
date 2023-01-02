
export async function getClients(){
    const outcome = await fetch(import.meta.env.VITE_API_URL)
    const res =  await outcome.json()

    return res
}

export async function getClient(id){
    const outcome = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const res = await outcome.json()
    return res
}

export async function addClient(data){
    try {
        const outcome = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await outcome.json() 
    } catch (error) {
        console.log(error)
    }
    
}

export async function updateClient(id, data){
    try {
        const outcome = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await outcome.json() 
    } catch (error) {
        console.log(error)
    }
}

export async function deleteClient(id){
    try {
        const outcome = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await outcome.json() 
    } catch (error) {
        console.log(error)
    }
}