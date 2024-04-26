import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import aboutgoalimg from '../../../assets/about_pic_2.png'


const Aboutgoal = () => {
  return (
    <>
      <div className='container'>
        <div className='bg-[#F4F5F5] py-[80px] px-[80px]'>
           <div className='flex items-center gap-x-[61px]'>
              <div>
                 <Heading headtitle="Who we are" headclass="w-[95px] text-[16px] font-medium font-family leading-[28px]"/>
                 <Heading headtitle="Goal focussed" headclass="w-[515px] text-[38px] font-semibold font-family leading-[56px] text-[#282938] mt-[6px] mb-[16px]"/>
                <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[515px] text-[16px] font-normal font-family leading-[28px] text-[#282938] mt-[6px]"/>
              </div>

              <div>
                 <Heading headtitle="Continuous improvement" headclass="w-[515px] text-[38px] font-semibold font-family leading-[56px] text-[#282938] mt-[6px] mb-[16px]"/>
                <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[515px] text-[16px] font-normal font-family leading-[28px] text-[#282938] mt-[6px]"/>
              </div>

              <div>

              </div>
           </div>

        </div>
        <div className='w-[1280px] h-[340px] overflow-hidden'>
          <img className='w-full h-full object-cover' src={aboutgoalimg} alt="Not Found" />
        </div>
      </div>
    </>
  )
}

export default Aboutgoal
