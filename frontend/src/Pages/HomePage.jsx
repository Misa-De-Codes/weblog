import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

function HomePage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("http://localhost:5500/api/v1/blogs/")
      const data = await res.json()
      setBlogs(data.data)
      console.log(data)
    }
    fetchBlogs()
  }, [])

  return (
    <>
      <ul className="">
        {
          blogs && blogs.length > 0 ? (
            blogs.map(blog => (
              <Post key={blog._id} title={blog.title} body={blog.body} author={blog.author} createdAt={blog.createdAt} genre={blog.genra} likes={blog.likes} bookmarks={blog.bookMark} />
            ))
          ) : (
            <div className="fixed min-w-screen min-h-screen top-0 left-0 flex justify-center items-center">
              <div className='loading'></div>
            </div>
          )
        }
      </ul>
    </>
  )
}

export default HomePage