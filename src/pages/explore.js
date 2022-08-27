import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Explore = () => {
  // const [image, setImage ] = useState(moonImg);
  useEffect(() => {
    getImage();
  }, []);

  const [image, setImage] = useState();

  const getImage = async () => {
    const api = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APIKEY}`
    );
    const data = await api.json();
    console.log(data);
    setImage(data);
  };

  // try{
  //   useEffect(() => {
  //     return () => {
  //       axios.get(fetchURL).then((response) =>{
  //         setImage(response.data);
  //        // setImage(response.data.results);
  //       })
  //     };
  //   }, [fetchURL]);

  //   console.log(image);
  // } catch(error) {
  //     if(error.response){
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //   } else if (error.request) {
  //       // The client never received a response, and the request was never left
  //       console.log("I received");
  //   } else {
  //       // Anything else
  //       console.log("Sth else")
  //     }
  // }

  return (
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen mt-0 bg-cover bg-no-repeat bg-right">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between mx-[5rem] px-7 md:px-20 py-7 md:px-0  items-center">
        <div className="flex flex-col w-[50%] mr-[5rem]">
          <h5 className="mb-10 text-center md:text-left">
            Space titbits
          </h5>
          <div className="p-5 backdrop-blur-sm bg-white/20 rounded-sm h-[76vh] w-full">
            <img src={image?.url} alt={image?.title} className="h-[70vh] w-full bg-cover" />
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <h3>{image?.title}</h3>
          <hr className="my-7 relative" />
          <p>{image?.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
