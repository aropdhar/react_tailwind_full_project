import React from 'react'
import aboutbg from '../../../assets/about_img.png'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'

const Aboutbg = () => {
  return (
    <>
      <div className='pt-[200px] pb-[120px]'>
        <div className='container'>
           <div className='flex items-center gap-x-[136px]'>
              <div>
                  <Heading headtitle="About us" headclass="w-[419px]  text-[18px] leading-[32px] font-family text-[#282938] font-semibold"/>
                  <Heading headtitle="Our designs solve problems" headclass="w-[595px] text-[54px] leading-[74px] font-family text-[#282938] font-semibold mt-[5px] mb-[31px]"/>
                  <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." paraclass="w-[484px] font-family font-normal text-[#282938] text-[16px]  leading-[28px] text-justify"/>                  
              </div>
              <div>
                  <img src={aboutbg} alt="Not Found" />
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Aboutbg
