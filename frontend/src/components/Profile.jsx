import React, { useState, useEffect } from 'react';
import Post from './Post';
import { NavLink, Link, Outlet } from 'react-router-dom';
import UserPost from './UserPost';

function Profile({ profile }) {
    const {
        name,
        username,
        role,
        bio,
        avatarUrl,
        location,
        skills,
        contact,
    } = profile;

    const tabClass = ({ isActive }) =>
        `h-8 px-3 border-b-3 transition delay-100 ease-in-out ${isActive ? 'text-white border-white/75' : 'text-white/50 border-transparent'
        }`;

    return (
        <>
            <div className='flex items-center justify-center mt-18 p-5 rounded-t-2xl bg-gray-900 '>
                <div className="min-w-18 h-18 mr-5 ">
                    <img className='w-18 h-18 rounded-full ' src={avatarUrl} alt={`${name}'s avatar`} />
                </div>
                <div className='flex flex-col '>
                    <h1 className='w-fit mb-1 h-5 font-semibold '>{name}</h1>
                    <p className='w-fit text-xs text-white/75 '>{bio}</p>
                </div>
            </div>
            <div className="flex gap-5 mb-5 px-5 pb-5 rounded-b-2xl bg-gray-900 ">
                <Link to='/settings' className="text-xs ">131 <span className="text-white/50">following</span></Link>
                <Link to='/settings' className="text-xs "> 244 <span className="text-white/50 ">followers</span></Link>
            </div>

            <nav className="sticky top-13 flex justify-between pt-3 border-b-1 border-white/25 bg-black">
                <NavLink to="/profile/posts" className={tabClass}>Posts</NavLink>
                <NavLink to="/profile/replies" className={tabClass}>Replies</NavLink>
                <NavLink to="/profile/articles" className={tabClass}>Articles</NavLink>
                <NavLink to="/profile/likes" className={tabClass}>Likes</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default Profile