import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

function Post({ title, body, author, createdAt, genre, likes = [], bookmarks = [] }) {
  return (
    <article className='mb-5 pt-5 border-t-1 border-white/15 '>
      
      {/* Post Footer */}
      <div>
        <div className='flex justify-between'>
          <div className="flex items-center justify-center ">
          <div className='mr-1'>
            <CgProfile />
          </div>
          <span className='text-xs text-white/50' >@{author?.username}</span>
          </div>
          <span className='text-xs text-white/75'>
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
        
      {/* Post Header */}
      <div>
        <h2 className='mt-2 font-semibold'>{title}</h2>
      </div>

      {/* Post Content */}
      <p className='text-white/75 text-sm mt-2'>
        {body.length > 150 ? `${body.substring(0, 150)}...` : body}
      </p>


        {/* <div className='mt-3'>
          <button >
            ❤️ {likes.length || 0}
          </button>
          <button>
            🔖 {bookmarks.length || 0}
          </button>
        </div> */}
      </div>
    </article>
  )
}


export default Post