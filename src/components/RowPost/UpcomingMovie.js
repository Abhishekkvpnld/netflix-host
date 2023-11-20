import React, { useState, useEffect } from 'react'
import "./UpcomingMovie.css"
import axios from "../../axios/axios"
import { imageUrl,API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube' 


function UpcomingMovie(props) {
    const [Movie, setMovie] = useState([])
    const [UrlId,setUrlId]=useState([])
    useEffect(() => {
      axios.get(props.url).then((Response) => {
        setMovie(Response.data.results)
      })
    }, [])
  
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
  
    const handleMovie=(Id)=>{
  axios.get(`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${API_KEY}`).then((response)=>{
    if (response.data.results.length!==0) {
      setUrlId(response.data.results[0].key);
      // console.log(response.data.results[0].key);
    } else {
      console.log('No trailer available');
    }
    
  })
    }

  return (
    <div className='row' id='upcoming'>
           <h2>{props.title}</h2>
      <div className="posters">
        {
          Movie.map((obj) =>
              <img onClick={()=>handleMovie(obj.id)} className={ 'smallPoster'} src={`${imageUrl+obj.backdrop_path}`} alt="image"  />
  
          )
        }
        
      </div >
     {UrlId ? <YouTube videoId={UrlId} opts={opts} /> :'' }
    </div>
  )
}

export default UpcomingMovie ;