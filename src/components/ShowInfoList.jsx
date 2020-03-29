import React from 'react'

const ShowInfoList = ({
  firstAired,
  numberOfSeason,
  numberOfEpisodes,
  showStatus,
  lastAired,
  popularity,
  originCountry,
  rating,
}) => {
  return (
    <>
      <li>
        <span>First Aired:</span> {new Date(firstAired).toDateString()}
      </li>
      <li>
        <span>Number of Seasons:</span> {numberOfSeason}
      </li>
      <li>
        <span>Number of Episodes:</span> {numberOfEpisodes}
      </li>
      <li>
        <span>Show status:</span> {showStatus}
      </li>
      <li>
        <span>Last Episode Aired:</span> {new Date(lastAired).toDateString()}
      </li>
      <li>
        <span>Popularity:</span> {popularity}
      </li>

      <li>
        <span>Origin Country:</span> {originCountry}
      </li>
      <li>
        <span>Current Rating:</span> {rating}
      </li>
    </>
  )
}

export default ShowInfoList
