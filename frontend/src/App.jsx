import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async() => {

      try {
        const res = await fetch('http://localhost:5500/api/v1/blogs')
        const data = await res.json()

        console.log(data)
        setData(data)


      } catch (error) {
        console.log(error)
      }

      getData()
      console.log("setdata", data)
    }



  }, []);

  return (
    <>
      <div className="text-5xl">Blogs</div>

    </>
  );
}

export default App;
