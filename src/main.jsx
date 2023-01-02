import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Layout from './components/Layout'
import ClientNew, { action as ActionClientForm } from './pages/ClientNew'
import Index, {loader as clientLoader} from './pages/Index'
import ClientEdit, {loader as clientEditLoader, action as clientEditAction} from './pages/ClientEdit'
import { action as clientDestroyAction } from './components/Client'
import { ErrorPage } from './components/ErrorPage'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/client/new',
        element: <ClientNew />,
        action: ActionClientForm,
        errorElement: <ErrorPage />
      },
      {
        path: 'client/:clientId/edit',
        element: <ClientEdit />,
        loader: clientEditLoader,
        action: clientEditAction,
        errorElement: <ErrorPage />
      },
      {
        path: 'client/:clientId/destroy',
        action: clientDestroyAction,
        errorElement: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
