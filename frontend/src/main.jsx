import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import ForYou from './For_You/ForYou.jsx'
import Settings from './Settings/Settings.jsx'
import Profile from './Profile/Profile.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import Auth from './Auth/Auth.jsx'

const router = createBrowserRouter([
    { path: '/auth', element: <Auth />},
    { path: '/home', element: <Home /> },
    { path: '/feeds', element: <ForYou />},
    { path: '/settings', element: <Settings /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFoundPage />}
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
