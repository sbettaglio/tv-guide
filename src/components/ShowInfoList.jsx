import React from 'react'

const ShowInfoList = ({
  firstAired,
  numberOfSeasons,
  numberOfEpisodes,
  showStatus,
  lastAired,
  popularity,
  originCountry,
}) => {
  return (
    <>
      <li>
        <span>First Aired:</span> {firstAired}
      </li>
      <li>
        <span>Number of Seasons:</span> {numberOfSeasons}
      </li>
      <li>
        <span>Number of Episodes:</span> {numberOfEpisodes}
      </li>
      <li>
        <span>Show status:</span> {showStatus}
      </li>
      <li>
        <span>Last Episode Aired:</span> {lastAired}
      </li>
      <li>
        <span>Popularity:</span> {popularity}
      </li>

      <li>
        <span>Origin Country:</span> {originCountry}
      </li>
    </>
  )
}

export default ShowInfoList
