import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    console.log(castResponse.data)
    setCastInfo(castResponse.data)
  }
  useEffect(() => {
    getShowInfo()
  }, [])

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
              {/* <span>Created by:</span> {castInfo.created_by.0.name} */}
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ShowPage
