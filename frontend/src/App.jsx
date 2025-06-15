import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main className='py-15'>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default App