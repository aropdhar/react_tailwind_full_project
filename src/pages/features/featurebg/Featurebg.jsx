import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import featurebg from '../../../assets/Feature_bg.png'
import Common_btn from '../../../component/common_btn/Common_btn'


const Featurebg = () => {
  return (
    <div>
      <div className='bg-[#1C1E53] pt-[200px] pb-[120px]'>
        <div className='container'>
           <div className='flex items-center gap-x-[60px]'>
              <div>
                  <Heading headtitle="All the features you need" headclass="w-[468px] text-[54px] leading-[74px] font-family text-[#fff] font-semibold"/>
                  <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." paraclass="w-[562px] font-family text-[#FFFFFF] mt-[24px] mb-[48px] text-[16px]"/>
                  <div className='flex items-center gap-x-[40px]'>
                    <Common_btn btntext="View Pricing" btnclass="btn2"/>
                  </div>
              </div>
              <div>
                  <img src={featurebg} alt="Not Found" />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Featurebg
