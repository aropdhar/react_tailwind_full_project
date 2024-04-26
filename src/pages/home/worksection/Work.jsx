import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import pointer from '../../../assets/pointer 1.png'
import pointer1 from '../../../assets/pointer 2.png'
import pointer2 from '../../../assets/pointer 3.png'
import pointer3 from '../../../assets/pointer 4.png'
import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
  return (
    <>
         <div className='bg-[#F4F6FC] py-[128px]'>
        <div className='container'>
            <div className='flex gap-x-[142px]'>
                <div>
                    <Heading headtitle="How we work" headclass='w-[405px] font-family text-[48px] leading-[64px] font-semibold text-[#282938]'/>
                    <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." paraclass='w-[405px] text-[16px] text-[#282938] font-normal my-[16px]'/>
                    <div className='flex items-center gap-x-[16px] text-[#2405F2]'>
                      <Paragraph paratitle="Get in touch with us"/>
                      <FaArrowRight/>
                    </div>
                </div>
              <div className='flex gap-[25px] flex-wrap'> 
                  <div>
                      <img src={pointer} alt="Not Found" />
                      <Heading headtitle="Strategy" headclass="w-[328px] text-[32px] font-medium leading-[48px] font-family mt-[16px] mb-[8px]"/>
                      <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." paraclass="w-[303px] font-normal leading-[28px] text-[#282938]"/>
                  </div>
                  <div>
                      <img src={pointer1} alt="Not Found" />
                      <Heading headtitle="Wireframing" headclass="w-[328px] text-[32px] font-medium leading-[48px] font-family mt-[16px] mb-[8px]"/>
                      <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." paraclass="w-[303px] font-normal leading-[28px] text-[#282938]"/>
                  </div>
                  <div>
                      <img src={pointer2} alt="Not Found" />
                      <Heading headtitle="Design" headclass="w-[328px] text-[32px] font-medium leading-[48px] font-family mt-[16px] mb-[8px]"/>
                      <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." paraclass="w-[303px] font-normal leading-[28px] text-[#282938]"/>
                  </div>
                  <div>
                      <img src={pointer3} alt="Not Found" />
                      <Heading headtitle="Development" headclass="w-[328px] text-[32px] font-medium leading-[48px] font-family mt-[16px] mb-[8px]"/>
                      <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." paraclass="w-[303px] font-normal leading-[28px] text-[#282938]"/>
                  </div>
              </div>
            </div>
        </div>
         </div>
    </>
  )
}

export default Work
