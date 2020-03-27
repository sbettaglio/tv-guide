import React from 'react'
import { Link } from 'react-router-dom'

const ShowsList = ({ showId, title, description, pic }) => {
  return (
    <li>
      <h4>{title}</h4>
      <Link to={`/tv:${showId}`}>
        <img
          className="show-pic"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${pic}`}
          alt="show poster"
        />
      </Link>

      <p className="show-description">{description}</p>
    </li>
  )
}

export default ShowsList
