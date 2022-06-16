import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Traditionalfetch() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/superheroes').then(res => {
            console.log(res);
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

  return (
      <>
          <h2>Super Heroes Page</h2>
          {data.map(hero => {
              return <div>{hero.name}</div>
          })}
      </>
  )
}

export default Traditionalfetch