import React from 'react'
const Button = ({styles}) => {
  return (
    <div type="button" className={`py-4 px6 font-poppins text-medium text-[18px]  outline-none cursor-pointer rounded-2xl button ${styles}`}>Get Started</div>
  )
}

export default Button