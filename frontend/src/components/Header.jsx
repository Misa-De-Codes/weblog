import React from 'react'

function Header() {
    return (
        <header className="fixed top-0 left-0 min-w-screen bg-black ">
            <div className=" ">
                <a href="" className="flex p-3 w-fit ">
                    <img src="/vite.svg" alt="" className="w-5 mr-3" />
                    <h1 className="">Miku Blog</h1>
                </a>
            </div>
        </header>
    )
}

export default Header