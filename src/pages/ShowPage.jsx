import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowPage = (props) => {
  let showId = props.match.params.showId
  showId = showId.substring(1)
  console.log(showId)
  const [showInfo, setShowInfo] = useState([])
  // const [castInfo, setCastInfo] = useState([])

  const getShowInfo = async () => {
    const showResponse = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US&page=1`
    )
    console.log(showResponse.data)
    setShowInfo(showResponse.data)
  }
  useEffect(() => {
    getShowInfo()
  }, [])
  console.log(showInfo)

  return <div>{showInfo.name}</div>
}

export default ShowPage
