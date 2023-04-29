import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from './AppContainer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <QueryClientProvider client={client}>
            <ProSidebarProvider>
                <AppContainer />
            </ProSidebarProvider>
       </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
