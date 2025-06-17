import React, { useEffect, useState } from 'react'
import Post from './Post'

function UserPost({username ='musa-de-codes', x = '68380f1b1350c6f1084a4fbc'}) {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch(`http://localhost:5500/api/v1/blogs/${username}`)
            const data = await res.json()
            setBlogs(data.data)
            console.log(data)
        }
        fetchBlogs()
    }, [])

    return (
        <ul className="overscroll-contain">
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
    )
}

export default UserPost