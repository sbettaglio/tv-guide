import React from 'react'
import { Link } from 'react-router-dom'

const ShowsList = ({ showId, title, description, pic }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{showId}</p>
      <Link to={`/tv:${showId}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${pic}`}
          alt="show poster"
        />
      </Link>

      <p>{description}</p>
    </li>
  )
}

export default ShowsList
