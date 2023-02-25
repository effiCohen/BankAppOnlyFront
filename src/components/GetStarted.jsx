import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
<div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer button `}>
    <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full  transition-all ease-out duration-700`}>
      <div className={`${styles.flexStart} flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient hover:text-gray-700 ">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px] ">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
  )
}

export default GetStarted