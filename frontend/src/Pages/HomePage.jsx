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
      {/* Example static post, can be removed if not needed */}
      {/* <Post title={"hds"} body={'shd'} /> */}
      <ul className="">
        {
          blogs && blogs.length > 0 ? (
            blogs.map(blog => (
              <Post key={blog._id} title={blog.title} body={blog.body} author={blog.author} createdAt={blog.createdAt} genre={blog.genra} likes={blog.likes} bookmarks={blog.bookMark} />
            ))
          ) : (
            <h1>No blogs found</h1>
          )
        }
      </ul>
    </>
  )
}

export default HomePage