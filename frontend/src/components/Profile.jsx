import React from 'react';

function Profile({ profile }) {
    const {
        name,
        role,
        bio,
        avatarUrl,
        location,
        skills,
        contact,
    } = profile;

    return (
        <>
            <div className='flex items-center justify-center mb-5 p-5 rounded-2xl bg-gray-900 '>
                <div className="min-w-15 h-15 mr-5 ">
                    <img className='w-15 h-15 rounded-full ' src={avatarUrl} alt={`${name}'s avatar`} />
                </div>
                <div className='flex flex-col '>
                    <h1 className='w-fit mb-1 font-semibold '>{name}</h1>
                    <p className='w-fit text-xs text-white/75 '>{bio}</p>
                    {/* <p><strong>Location:</strong> {location}</p> */}
                </div>
            </div>
            <div className="flex flex-col mb-5 p-5 rounded-2xl bg-gray-900 ">
                <h3 className='text-xl mb-3 font-semibold '>Contact</h3>
                <ul className='text-white/50 '>
                    <li><a href={`mailto:${contact.email}`}>Email</a></li>
                    <li><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </>
    );
}

export default Profile