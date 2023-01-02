import { useLoaderData } from "react-router-dom"
import Client from '../components/Client'

import { getClients } from '../data/clients'

export function loader(){
    const clients = getClients()
    return clients
}

function Index(){

    const clients = useLoaderData()

    return (
        <>
            <h2 className="text-blue-900 text-3xl font-bold">Clients</h2>
            <p>Manage your Clients</p>
            { clients.length ? (
                <table className="w-full mt-5 shadow">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Client</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clients.map( client => (
                            <Client client={client} key={client.id}/>
                        ) ) }
                        
                    </tbody>
                </table>
            ) : (
                <p>There is not clients still</p>
            ) }
        </>
    )
}

export default Index