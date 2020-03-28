import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ActorPage = (props) => {
  let actorId = props.match.params.actorId
  actorId = actorId.substring(1)
  console.log(actorId)
  const [actorInfo, setActorInfo] = useState([])
  const getActorInfo = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US&page=1`
    )
    setActorInfo(resp.data)
    console.log(resp.data)
  }
  useEffect(() => {
    getActorInfo()
  }, [])
  return (
    <>
      <main>
        <section className="actor-info">
          <h1>{actorInfo.name}</h1>
          <div className="pic-container">
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actorInfo.profile_path}`}
              alt={`${actorInfo.name} head-shot `}
            />
          </div>
          <ul>
            <li>
              <span>Date of Birth:</span> {actorInfo.birthday}
            </li>
            <li>
              <span>Place of Birth:</span> {actorInfo.place_of_birth}
            </li>
            <li>
              <span>Biography:</span> {actorInfo.biography}
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ActorPage
