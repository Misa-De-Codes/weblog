import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, href, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './Pages/HomePage.jsx'
import SavePage from './Pages/SavePage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import AuthPage from './Pages/AuthPage.jsx'
import CreatePage from './Pages/CreatePage.jsx'
import UserPost from './components/UserPost.jsx'
import Loading from './components/Loading.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/home', element: <HomePage /> },
            { path: '/create', element: <CreatePage /> },
            { path: '/bookmarks', element: <SavePage /> },
            {
                path: '/profile/',
                element: <ProfilePage />,
                children: [
                    { index: true, element: <UserPost /> },
                    { path: '/profile/posts', element: <UserPost /> },
                    { path: '/profile/replies', element: <Loading/>},
                    { path: '/profile/articles', element: <UserPost /> },
                    { path: '/profile/likes', element: <Loading/> }
                ]
            },

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
