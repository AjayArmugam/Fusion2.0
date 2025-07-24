import React from 'react'
import './index.css'
import Card from './Card.jsx'
import aLogo from './images/a.png';
import bLogo from './images/b.jpeg';
import cLogo from './images/c.png';
import dLogo from './images/d.png';




const App = () => {
  return (
    <div className='bg-[#2b333b] min-h-screen'>
      <div className='will-change-auto h-[80px] bg-[#364049]/50  shadow-2xl  rounded--br-2xl rounded-bl-2xl'>
        <div className='grid grid-cols-4 place-items-center h-[300[px]] font-bold text-2xl text-white'>
          <a className='ml-[-10px] mt-[20px] hover:cursor-pointer'>Logo</a>
          <a className='mt-[20px] hover:cursor-pointer'>Home</a>
          <a className='mt-[20px] hover:cursor-pointer'>All Scholarships</a>
          <a className='ml-[60px] mt-[20px] hover:cursor-pointer'>Account</a>
        </div>
      </div>
      
      <div className='w-[840px] h-[320px] flex flex-col justify-center  bg-[#364049]  rounded-2xl shadow-2xl mx-auto mt-[100px] text-center items-center' >
          <h2 className='font-bold  text-4xl  bg-gradient-to-r from-[#b4afafee] to-[#FFD700] bg-clip-text text-transparent shadow-2xl'>Welcome to Scholarship Finder Bot</h2>
          <button className='w-[350px] h-[70px] bg-gradient-to-r from-[#043333] to-[#2d5555] mt-[50px] rounded-2xl
                            text-white font-bold text-3xl hover:shadow-lg hover:cursor-pointer'>
                              Find Scholarship
          </button>
      </div>

      <h2 className='text-white text-5xl mt-[50px] font-semibold  ml-[30px] font-mono mb-[10px]'>Popular Scholarships</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  <Card
    name={"Fulbright-Nehru Doctoral Research Fellowship 2026-2027"}
    logo={aLogo}
    des={"The Fulbright-Nehru Doctoral Research Fellowships are designed to build long-term capacity to address global challenges and develop innovative solutions in key priority areas in both India and the U.S"}
  />
  <Card
    name={"FDU International Scholarship 2025"}
    logo={bLogo}
    link1={"https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-doctoral-research-fellowships/"}
    des={"FDU International Scholarship. Up to $24,000 per year. Minimum Requirements: · Global Housing Grant. $3,000. Minimum Requirements: · FDU Family Grant. $1,500."}
  />
  <Card
    name={"Education Future International Scholarship 2025"}
    logo={cLogo}
    des={"Education Future International Scholarship 2025 is an opportunity offered by the Education Future organisation. It is offered to meritorious Indian students who are studying overseas at any of the top universities globally"}
    
  />
  <Card
    name={"Entrepreneurship Award at Bayes Business School 2025"}
    logo={dLogo}
    des={"This Entrepreneurship & Innovation Management MSc focuses on helping you to become a resilient entrepreneur in practice, not just in theory. Through participating in highly interactive sessions, you’ll learn what it takes to bring new products to market"}
  />
</div>

      <div className='will-change-auto h-[150px] bg-[#364049] mt-[30px] flex flex-col justify-center shadow-lg'>
        <h1 className='text-white font-bold text-4xl  text-center'>Made By Hackthon Group</h1>
      </div>

    </div>
  )
}

export default App