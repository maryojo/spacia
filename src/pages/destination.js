import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import DestinationLayout from '../components/DestinationLayout';
import moonImg from '../images/destination/image-moon.png'
import marsImg from '../images/destination/image-mars.png'
import europaImg from '../images/destination/image-europa.png'
import titanImg from '../images/destination/image-titan.png'

const Destination = () => {
  const [image, setImage ] = useState(moonImg);

  return (
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen mt-0 bg-cover bg-no-repeat bg-right">
    <Navbar />
    <div className='flex flex-col lg:flex-row justify-between px-7 md:px-20 py-7 md:px-0  items-center'>
      <div className='flex flex-col'>
      <h5 className='mb-10 text-center md:text-left'><span className='pr-5 opacity-40'>01</span>Pick your destination</h5>
      <img src={image} alt="" className='w-[70%] mx-auto'/>
      </div>
    <Tabs id="controlled-tabs" selectedTabClassName="tab-selected" className="w-[90%] lg:w-[50%] lg:text-left text-center mt-12 ">
    <TabList className="nav-text flex flex-row space-x-10 mb-5 justify-center lg:justify-start md:mb-0">
      <Tab className="cursor-pointer" onClick={() => setImage(moonImg)}>moon</Tab>
      <Tab className="cursor-pointer" onClick={() => setImage(marsImg)}>mars</Tab>
      <Tab className="cursor-pointer" onClick={() => setImage(europaImg)}>europa</Tab>
      <Tab className="cursor-pointer" onClick={() => setImage(titanImg)}>titan</Tab>
    </TabList>
    <TabPanel>
    <DestinationLayout name={"moon"} description={"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."} distance={"384,400 km"} travelTime={"3 days"}/>
    </TabPanel>
    <TabPanel>
    <DestinationLayout name={"mars"} description={"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"} distance={"384,400 km"} travelTime={"9 months"}/>
    </TabPanel>
    <TabPanel>
    <DestinationLayout name={"europa"} description={"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."} distance={"225 MIL. km"} travelTime={"3 years"}/>
    </TabPanel>
    <TabPanel>
    <DestinationLayout name={"titan"} description={"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."} distance={"1.6 BIL. km"} travelTime={"7 years"}/>
    </TabPanel>

    </Tabs>
    </div>
    </div>
  )
}

export default Destination;