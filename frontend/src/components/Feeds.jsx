import React, { useEffect, useState } from 'react';
import Post from './ui/Post'

function MainPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:5500/api/v1/blogs', {
                    method: 'GET'
                })
                const data = await res.json()

                if (!data) return 'error fetchinig data'

                setData(data.data)
                console.log(data.data[1])
            } catch (error) {
                console.log(error)
            }
        }
        getData()

    }, []);
    return (
        <ul className="flex flex-col gap-y-5">
            {
                data ? data.map(data => <Post
                    key={data._id}
                    author={data.author.fullName}
                    username={data.author.username}
                    createdAt={data.author.createdAt}
                    title={data.title}
                    body={data.body}

                />) : <p className="text-5xl">Loading</p>
            }
        </ul>
    )
}

export default MainPage