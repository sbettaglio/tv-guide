import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CastList from '../components/CastList'
const ShowPage = (props) => {
  let showId = props.match.params.showId
  showId = showId.substring(1)
  const [showInfo, setShowInfo] = useState([])
  const [castInfo, setCastInfo] = useState([])
  // const [castInfo, setCastInfo] = useState([])

  const getShowInfo = async () => {
    const showResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US&page=1`
    )
    console.log(showResponse.data)
    const castResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US`
    )
    setShowInfo(showResponse.data)
    // console.log(castResponse.data.cast)
    setCastInfo(castResponse.data.cast)
  }
  useEffect(() => {
    getShowInfo()
  }, [])
  console.log(castInfo)
  return (
    <>
      <header>
        <h1>{showInfo.name}</h1>
      </header>
      <main>
        <section className="show-details">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showInfo.poster_path}`}
          />
          <ul>
            <li>
              <span>First Aired:</span> {showInfo.first_air_date}
            </li>
            <li>
              <span>Number of Seasons:</span> {showInfo.number_of_seasons}
            </li>
            <li>
              <span>Number of Episodes:</span> {showInfo.number_of_episodes}
            </li>
            <li>
              <span>Show status:</span> {showInfo.status}
            </li>
            <li>
              <span>Last Episode Aired:</span> {showInfo.last_air_date}
            </li>
            <li>
              <span>Popularity:</span> {showInfo.popularity}
            </li>

            <li>
              <span>Origin Country:</span> {showInfo.origin_country}
            </li>
          </ul>
        </section>
        <section className="cast-details">
          <ul>
            <h3>Cast</h3>
            {castInfo.map((cast) => {
              return (
                <CastList
                  key={cast.id}
                  character={cast.character}
                  name={cast.name}
                  pic={cast.profile_path}
                />
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default ShowPage
