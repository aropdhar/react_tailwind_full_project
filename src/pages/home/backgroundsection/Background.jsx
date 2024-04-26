import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import homebg from '../../../assets/home_bg.png'
import Common_btn from '../../../component/common_btn/Common_btn'
import { FaArrowRight } from "react-icons/fa6";

const Background = () => {
  return (
    <>
       <div className='bg-[#1C1E53] pt-[200px] pb-[120px]'>
        <div className='container'>
           <div className='flex items-center gap-x-[60px]'>
              <div>
                  <Heading headtitle="Building stellar websites for early startups" headclass="w-[582px] text-[54px] leading-[74px] font-family text-[#fff] font-semibold"/>
                  <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." paraclass="w-[562px] font-family text-[#FFFFFF] mt-[24px] mb-[48px] text-[16px]"/>
                  <div className='flex items-center gap-x-[40px]'>
                    <Common_btn btntext="View our work" btnclass="btn2"/>
                    <div className='flex items-center common_text_color gap-x-[16px]'>
                      <Paragraph paratitle="View Pricing" className="pricing"/>
                      <FaArrowRight className='w-[24px] cursor-pointer'/>
                    </div>
                  </div>
              </div>
              <div>
                  <img src={homebg} alt="Not Found" />
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Background
