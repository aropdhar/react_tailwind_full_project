import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import card from '../../../assets/card.png'
import card2 from '../../../assets/card 1.png'
import card3 from '../../../assets/card 2.png'
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
  return (
    <>
        <div className='bg-[#FFFFFF] py-[120px]'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <Heading headtitle="View our projects" headclass="w-[467px] font-family font-semibold text-[48px]"/>
            <div className='flex items-center gap-x-[16px] text-[#2405F2]'>
              <Paragraph paratitle="Get in touch with us"/>
              <FaArrowRight/>
            </div>
          </div>

          <div className='flex mt-[64px] items-center gap-x-[32px]'>
            <div>
                <img src={card} alt="Not Found" />
            </div>
            <div className='flex flex-col gap-y-[32px]'>
              <img src={card3} alt="Not Found" />
              <img src={card2} alt="Not Found" />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Project
