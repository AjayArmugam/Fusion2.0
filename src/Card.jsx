import React from 'react'

const Card = ({name, des, logo, link1}) => {
  return (
    <div>
      <div className='w-[420px] h-[400px] bg-[#1c3c50] ml-[40px] mt-[39px] rounded-4xl shadow-2xl flex flex-col'> 
        <div className='flex flex-row h-[150px]'>
        <img src={logo} alt="Scholarship Logo" className="w-12 h-12 ml-[19px] mt-[12px]"/>
          <h1 className='text-white text-right font-semibold  font-mono text-3xl mr-[30px] mt-[15px]'>{name}</h1>
        </div>
        
        <div className='flex flex-row  h-[180px]'>
          <h1 className='text-white font-regular ml-[20px] mt-[20px] text-center'>{des}</h1>
        </div>
        <a
  href={link1}
  target="_blank"
  rel="noopener noreferrer"
  className="w-[300px] h-[55px] inline-flex items-center justify-center text-center bg-[#b9a35a] ml-[50px] font-bold text-white text-2xl rounded-[20px] shadow-2xl font-mono hover:cursor-pointer hover:shadow-lg"
>
  Apply Now
</a>
      
      </div> 
    </div>
  )
}

export default Card