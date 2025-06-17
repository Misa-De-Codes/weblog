import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './Pages/HomePage.jsx'
import SavePage from './Pages/SavePage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import AuthPage from './Pages/AuthPage.jsx'
import CreatePage from './Pages/CreatePage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/home', element: <HomePage /> },
            { path: '/create', element: <CreatePage /> },
            { path: '/bookmarks', element: <SavePage /> },
            { path: '/profile', element: <ProfilePage/> },

            { path: '/settings', element: <SettingsPage /> },

            { path: '*', element: <NotFoundPage /> },
            { path: '/auth', element: <AuthPage /> },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
