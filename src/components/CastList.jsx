import React from 'react'
import { Link } from 'react-router-dom'
const CastList = ({ character, name, pic, actorId }) => {
  return (
    <li>
      <p>{character}</p>
      <Link to={`/actor:${actorId}`}>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${pic}`} />
      </Link>
      <p>
        <span>Portrayed by:</span> {name}
      </p>
    </li>
  )
}

export default CastList
