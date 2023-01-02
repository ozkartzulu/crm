import { useRouteError } from 'react-router-dom'

export function ErrorPage(){

    const error = useRouteError()

    return (
        <div className='mt-10'>
            <h2 className='text-blue-900 text-3xl font-bold text-center mb-5'>CRM - Clients</h2>
            <p className='text-center text-xl font-semibold mb-4'>There is a Error</p>
            <p className='text-center'>{error.message || error.statusText}</p>
        </div>
    )
}