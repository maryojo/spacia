import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import NasaImage from '../components/NasaImage';
import DestinationLayout from '../components/DestinationLayout';
import moonImg from '../images/destination/image-moon.png'


const Explore = () => {
  const [image, setImage ] = useState(moonImg);

  return (
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen mt-0 bg-cover bg-no-repeat bg-right">
    <Navbar />
    <div className='flex flex-col lg:flex-row justify-between px-7 md:px-20 py-7 md:px-0  items-center'>
      <div className='flex flex-col'>
      <h5 className='mb-10 text-center md:text-left'><span className='pr-5 opacity-40'>01</span>News</h5>
      <NasaImage/>
      </div>
    <DestinationLayout name={"star"} description={"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."} distance={"384,400 km"} travelTime={"3 days"}/>
    </div>
    </div>
  )
}

export default Explore;