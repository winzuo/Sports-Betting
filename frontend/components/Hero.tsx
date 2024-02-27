"use client";

import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <div className='hero__title'>
                Even the odds with ParlayProwl, the next best in PrizePicks optimizing.
            </div>

            <p className='hero__subtitle'>
                With the latest odds and the best picks, we'll help you find the best parlays on PrizePicks.
            </p>

            <CustomButton 
              title = "Find the best odds"
              containerStyles = "bg-primary-blue text-white rounded-full mt-10"
              handleClick = {handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero