import React, {useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../api/requests';

const NasaImage = () => {
  const fetchURL = requests.imageOfDay;
  const [image, setImage] = useState();

  useEffect(() => {
    return () => {
      axios.get(fetchURL).then((response) =>{
        setImage(response.data);
       // setImage(response.data.results);
      })
    };
  }, [fetchURL]);

  console.log(image);
  return (
    <div className='p-20 backdrop-blur-sm bg-white/20 rounded-sm '>
      <img src={image?.url} alt="" className=''/>
      <h5>{image?.title}</h5>
      <p>{image?.explanation}</p>
    </div>
  )
}

export default NasaImage