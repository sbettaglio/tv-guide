import React from 'react'

const CastList = ({ character, name, pic }) => {
  return (
    <li>
      <p>{character}</p>
      <div>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${pic}`} />
      </div>
      <p>
        <span>Portrayed by:</span> {name}
      </p>
    </li>
  )
}

export default CastList