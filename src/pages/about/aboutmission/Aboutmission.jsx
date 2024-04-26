import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import aboutpic from '../../../assets/about_pic.png'
import about1 from '../../../assets/about_1.png'

const Aboutmission = () => {
  return (
    <>
      <div className='bg-[#EEF4FA] py-[128px]'>
         <div className='container'>

            <div className='flex items-center gap-x-[140px]'>
               <div>
                   <Heading headtitle="Our Mission " headclass="w-[94px] text-[16px] font-family font-medium leading-[28px] text-[#282938]"/>
                   <Heading headtitle="Inspire, Innovate, Share" headclass="w-[623px] text-[38px] font-family font-semibold leading-[56px] my-[16px] text-[#282938]"/>
                   <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[623px] text-[16px] font-family font-normal leading-[28px] text-[#282938]"/>
               </div>
               <div className='w-[515px] h-[336px] overflow-hidden'>
                  <img className='w-full h-full object-cover' src={aboutpic} alt="Not Found" />
               </div>
            </div>
            
            <div className='flex items-center mt-[40px] gap-x-[140px]'>
                <div className='w-[515px] h-[336px] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={about1} alt="Not Found" />
                </div>
               <div>
                   <Heading headtitle="Our Mission " headclass="w-[94px] text-[16px] font-family font-medium leading-[28px] text-[#282938]"/>
                   <Heading headtitle="Laser focus" headclass="w-[623px] text-[38px] font-family font-semibold leading-[56px] my-[16px] text-[#282938]"/>
                   <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[623px] text-[16px] font-family font-normal leading-[28px] text-[#282938]"/>
               </div>
               
            </div>

         </div>
      </div>
    </>
  )
}

export default Aboutmission
