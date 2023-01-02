
import Form from '../components/Form'
import Error from '../components/Error'
import {useNavigate, Form as FormComp, useActionData, redirect} from 'react-router-dom'
import { addClient } from '../data/clients'

export async function action({request}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    // Validations
    const email = formData.get('email')
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const errors = []
    if(Object.values(data).includes('')){
        errors.push('All fields are required')
    }

    if(!regex.test(email)){
        errors.push('The Email there is not valid')
    }

    // Return values if exist a error
    if(Object.keys(errors).length){
        return errors
    }

    await addClient(data)

    return redirect('/')
}

function ClientNew(){

    const navigate = useNavigate()
    const errors = useActionData()

    return (
        <>
            <h2 className="text-blue-900 text-3xl font-bold">New Client</h2>
            <p>Fill all field for register</p>
            <button 
                className='bg-blue-700 hover:bg-blue-900 flex ml-auto text-white py-1 px-8'
                onClick={ () => navigate('/') }
            >
            Back</button>
            
            <div className='mt-10 md:w-3/4 mx-auto shadow rounded-md py-10 px-4'>
                { errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error> )}
                <FormComp method='post' noValidate>
                    <Form />
                    <input type="submit" className='bg-blue-700 hover:bg-blue-900 w-full transition-all text-white font-bold py-2 px-6' value="Register Client" />
                </FormComp>
            </div>
            
            
        </>
    )
}

export default ClientNew