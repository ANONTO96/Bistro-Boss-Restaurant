import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './routes/Router';
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/Authprovider';
// set up for tanstack query
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <RouterProvider router={router} />
    <Toaster position='top-right' reverseOrder={false} />
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
