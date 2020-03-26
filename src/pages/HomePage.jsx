import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=e02fcd07e30880bdc4771c0d0564e80e&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setShows(resp.data.results)
  }
  useEffect(() => {
    console.log('mounting')
    getAllShows()
  }, [])
  return (
    <>
      <h1>Top Rated TV Shows</h1>
    </>
  )
}

export default HomePage
