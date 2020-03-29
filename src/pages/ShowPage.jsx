import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CastList from '../components/CastList'
import ShowInfoList from '../components/ShowInfoList'
// import {format} from 'date-fns'
const ShowPage = (props) => {
  let showId = props.match.params.showId
  showId = showId.substring(1)
  const [showInfo, setShowInfo] = useState([])
  const [castInfo, setCastInfo] = useState([])
  const [rating, setRating] = useState({
    value: 0,
  })

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
  const handleInputChange = (e) => {
    const fieldToUpdate = e.target.name
    const val = e.target.value
    console.log(val)
    setRating((prevValue) => {
      console.log('before the update', prevValue)
      prevValue[fieldToUpdate] = val
      console.log('after', prevValue)
      return prevValue
    })
  }
  console.log(rating)
  const sendRatingToApi = async (e) => {
    e.preventDefault()
    const resp = await axios.post(
      `https://api.themoviedb.org/3/tv/${showId}/rating?api_key=e02fcd07e30880bdc4771c0d0564e80e&guest_session_id=72c6b504ee4b492fee9849920b3c9e4f`,
      rating
    )
    console.log(resp)
    if (resp.status === 201) {
      alert('Vote has been cast')
    }
  }
  return (
    <>
      <main>
        <h1>{showInfo.name}</h1>
        <section className="show-details">
          <aside>
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showInfo.poster_path}`}
            />
          </aside>
          <ul>
            <ShowInfoList
              key={showInfo.id}
              firstAired={showInfo.first_air_date}
              numberOfSeason={showInfo.number_of_seasons}
              numberOfEpisodes={showInfo.number_of_episodes}
              showStatus={showInfo.status}
              lastAired={showInfo.last_air_date}
              popularity={showInfo.popularity}
              originCountry={showInfo.origin_country}
              rating={showInfo.vote_average}
            />
          </ul>
          <form onSubmit={sendRatingToApi}>
            <label for="rating">Rate Show</label>

            <input
              type="number"
              max="10.0"
              min="0"
              name="value"
              onChange={handleInputChange}
            ></input>
            <input className="submit" type="submit" />
          </form>
        </section>
        <section className="cast-details">
          <h3>Cast</h3>
          <ul>
            {castInfo.map((cast) => {
              return (
                <CastList
                  actorId={cast.id}
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
