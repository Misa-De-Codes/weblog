import React, {useState, useEffect} from 'react'
import Post from '../components/Post'

function Home() {
  const [blogs, setBlogs] = useState({})

  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("http://localhost:5500/api/v1/blogs")
      const data = await res.json()


      setBlogs(data.data)


    }
    fetchData()

  }, [])
  console.log(blogs)

  return (
    <>
      <Post />
    </>
); 
}
export default Home
