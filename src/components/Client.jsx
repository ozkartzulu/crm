import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import { deleteClient } from '../data/clients'

export async function action({params}){
    deleteClient(params.clientId)
    return redirect('/')
}

function Client({client}) {

    const navigate = useNavigate()
    const {id, name, phone, email, company} = client

    return (
        <tr>
            <td className="p-2">
                <p className="text-gray-700 text-xl">{name}</p>
                <p className="text-gray-700">{company}</p>
            </td>
            <td className="p-2">
                <p> <span className="text-gray-700 font-bold">Email: </span>{email}</p>
                <p> <span className="text-gray-700 font-bold">Phone: </span>{phone}</p>
            </td>
            <td className="p-2 flex gap-2">
                <button 
                    type="button" 
                    className="text-blue-600 font-bold"
                    onClick={ () => navigate(`/client/${id}/edit`) }
                >Edit</button>
                <Form 
                    method='post'
                    action={`/client/${id}/destroy`}
                    onSubmit={ (e) => {
                        if( !confirm('Are you sure of eliminate this Client?') ){
                            e.preventDefault()
                        }
                    } }
                >
                    <button 
                        type="submit" 
                        className="text-red-500 font-bold"
                    >Delete</button>
                </Form>
            </td>
        </tr>

    )
}

export default Client