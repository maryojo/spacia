import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import CrewLayout from '../components/CrewLayout';
import member1 from '../images/crew/image-mark-shuttleworth.png'
import member3 from '../images/crew/image-anousheh-ansari.png'
import member2 from '../images/crew/image-douglas-hurley.png'
import member4 from '../images/crew/image-victor-glover.png'

const Crew = () => {
  const [image, setImage ] = useState(member1);

  return (
    <div className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop h-screen mt-0 bg-cover bg-no-repeat bg-right">
    <Navbar />
    <div className='flex flex-col md:flex-col-reverse lg:flex-row-reverse justify-between px-7 md:px-20 py-7 md:py-0 items-center'>
      <div className='flex flex-col'>
      <img src={image} alt="" className='w-[70%] mx-auto'/>
      </div>
    <Tabs id="controlled-tabs" selectedTabClassName="bg-white rounded-full outline-none" className="w-[90%] lg:w-[50%] lg:text-left text-center mt-12 ">
    <h5 className='mb-10 text-center md:text-left'><span className='pr-5 opacity-40'>02</span>Meet your crew</h5>
    
    <TabPanel>
    <CrewLayout name={"MARK SHUTTLEWORTH"} role={"Mission Specialist"} description={"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."}/>
    </TabPanel>
    <TabPanel>
    <CrewLayout name={"Douglas Hurley"} role={"commander"} description={"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2"}/>
    </TabPanel>
    <TabPanel>
    <CrewLayout name={"Anousheh Ansari"} role={"Flight Engineer"} description={"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."} />
    </TabPanel>
    <TabPanel>
    <CrewLayout name={"Victor Glover"} role={"pilot"} description={"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."} />
    </TabPanel>
    <TabList className="nav-text flex flex-row space-x-10 mb-5 justify-center lg:justify-start md:mb-0">
      <Tab className="cursor-pointer" onClick={() => setImage(member1)}><div className='w-3 h-3 rounded-full bg-white/20'></div></Tab>
      <Tab className="cursor-pointer" onClick={() => setImage(member2)}><div className='w-3 h-3 rounded-full bg-white/20'></div></Tab>
      <Tab className="cursor-pointer" onClick={() => setImage(member3)}><div className='w-3 h-3 rounded-full bg-white/20'></div></Tab>
      <Tab className="cursor-pointer" onClick={() => setImage(member4)}><div className='w-3 h-3 rounded-full bg-white/20'></div></Tab>
    </TabList>

    </Tabs>
    </div>
    </div>
  )
}

export default Crew;