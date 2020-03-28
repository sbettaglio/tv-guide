import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowsList from '../components/ShowsList'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [randomShows, setRandomShows] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US&page=1'
    )
    console.log(resp.data.results)
    console.log(
      resp.data.results[Math.floor(Math.random() * resp.data.results.length)]
    )
    setShows(resp.data.results)
    setRandomShows(
      resp.data.results[Math.floor(Math.random() * resp.data.results.length)]
    )
  }
  useEffect(() => {
    console.log('mounting')
    getAllShows()
  }, [])

  return (
    <>
      <main>
        <h1>Top Rated TV Shows</h1>
        <h3>Today's Random Show</h3>
        <section className="random-show ">
          <ShowsList
            showId={randomShows.id}
            key={randomShows.id}
            title={randomShows.name}
            description={randomShows.overview}
            pic={randomShows.poster_path}
          />
        </section>

        <h3>Top Rated Shows</h3>
        <ul className="home-list">
          {shows.map((show) => {
            return (
              <ShowsList
                showId={show.id}
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
