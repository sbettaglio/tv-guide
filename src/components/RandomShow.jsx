import React from 'react'

const RandomShow = ({ title, description, pic }) => {
  return (
    <>
      <h4>{title}</h4>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${pic}`} />
      <p>{description}</p>
    </>
  )
}

export default RandomShow
