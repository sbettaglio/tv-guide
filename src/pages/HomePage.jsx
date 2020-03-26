import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowsList from '../components/ShowsList'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setShows(resp.data.results)
  }
  useEffect(() => {
    console.log('mounting')
    getAllShows()
  }, [])
  return (
    <>
      <header>
        <h1>Top Rated TV Shows</h1>
      </header>
      <main>
        <ul>
          {shows.map((show) => {
            return (
              <ShowsList
                key={show.id}
                title={show.name}
                description={show.overview}
                pic={show.poster_path}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
