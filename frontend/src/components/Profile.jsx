import React, { useState, useEffect } from 'react';
import Post from './Post';
import { Link, Outlet } from 'react-router-dom';
import UserPost from './UserPost';

function Profile({profile}) {
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

    return (
        <>
            <div className='flex items-center justify-center p-5 rounded-t-2xl bg-gray-900 '>
                <div className="min-w-18 h-18 mr-5 ">
                    <img className='w-18 h-18 rounded-full ' src={avatarUrl} alt={`${name}'s avatar`} />
                </div>
                <div className='flex flex-col '>
                    <h1 className='w-fit mb-1 h-5 font-semibold '>{name}</h1>
                    <p className='w-fit text-xs text-white/75 '>{bio}</p>
                    {/* <p><strong>Location:</strong> {location}</p> */}
                </div>
            </div>
            <div className="flex gap-5 mb-5 px-5 pb-5 rounded-b-2xl bg-gray-900 ">
                <Link to='/settings' className="text-xs ">131 <span className="text-white/50">following</span></Link>
                <Link to='/settings' className="text-xs "> 244 <span className="text-white/50 ">followers</span></Link>
                <span className="text-xs text-white/50 "></span>
            </div>

            <nav className="sticky top-13 flex justify-between pt-3 border-b-1 border-white/25 bg-black">
                <Link to={'/profile/posts'} className="h-8 border-b-3 px-3 text-white border-white/75">Posts</Link>
                <Link to={'/profile/replies'} className="h-8 border-b- px-3 text-white/50 border-white/75">Replies</Link>
                <Link to={'/profile/articles'} className="h-8 border-b- px-3 text-white/50 border-white/75">Articles</Link>
                <Link to={'/profile/likes'} className="h-8 border-b- px-3 text-white/50 border-white/75">Likes</Link>
            </nav>
            <Outlet />
        </>
    );
}

export default Profile