import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import "./Banner.css"
import axios from "../../axios/axios"


function Banner() {
  const [Movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`movie/upcoming?api_key=${API_KEY}`).then((Response) => {
      console.log(Response.data.results[0])
      setMovie(Response.data.results[2])
    })
  }, [])
  return (

    <div className='banner' id='home' style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path :""})`}}>
      <div className='contents'>
        <h1 className='title'>{Movie ? Movie.title : ""}</h1>
        <div className='banner-buttons'>
          <button className='button'>play</button>
          <button className='button'>my list</button>
        </div>
        <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner

