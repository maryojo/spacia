import React, {useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../api/requests';

const NasaImage = () => {
  const fetchURL = requests.imageOfDay;
  const [image, setImage] = useState();

  try{
    useEffect(() => {
      return () => {
        axios.get(fetchURL).then((response) =>{
          setImage(response.data);
         // setImage(response.data.results);
        })
      };
    }, [fetchURL]);
  
    console.log(image);
  } catch(error) {
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The client never received a response, and the request was never left
        console.log("I received");
    } else {
        // Anything else
        console.log("Sth else")
      }
  }
  
  return (
    <div className='p-20 backdrop-blur-sm bg-white/20 rounded-sm '>
      <img src={image?.url} alt="" className=''/>
      <h5>{image?.title}</h5>
      <p>{image?.explanation}</p>
    </div>
  )
}

export default NasaImage