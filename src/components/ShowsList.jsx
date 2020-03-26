import React from 'react'

const ShowsList = ({ title, description, pic }) => {
  return (
    <li>
      <p>{title}</p>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${pic}`} />
      <p>{description}</p>
    </li>
  )
}

export default ShowsList
