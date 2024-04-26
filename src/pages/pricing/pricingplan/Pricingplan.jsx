import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import pointer from '../../../assets/Pointer.png'
import Common_btn from '../../../component/common_btn/Common_btn'

const Pricingplan = () => {
  return (
    <>
      <div className='py-[120px]'>
        <div className='container'>
           <div className='flex flex-col items-center justify-center'>
              <Heading headtitle="Our Pricing Plans" headclass='w-[414px] font-family font-semibold text-[48px] leading-[64px]'/>
              <Paragraph paratitle="When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them." paraclass="w-[562px] text-[16px] leading-[28px] font-family font-medium mt-[16px] mb-[64px]"/>
           </div>

           <div className='flex items-center gap-x-[32px]'>

              <div className='bg-[#F4F6FC] py-[64px] px-[74px] rounded-[8px]'>
                 <div className='flex items-center gap-x-[8px]'>
                    <Heading headtitle="$299" headclass="w-[95px] font-family text-[38px] leading-[56px] font-semibold"/>
                    <span className='text-[#2405F2]'>Per Design</span>
                 </div>
                 <Heading headtitle="Landing Page" headclass="mt-[20px] mb-[8px] w-[180px] font-family text-[24px] leading-[36px] font-normal"/>
                 <Paragraph paratitle="When you’re ready to go beyond prototyping in Figma," paraclass="w-[281px] font-family text-[16px] leading-[28px] font-normal mb-[76px]"/>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span className='w-[117px] text-[16px] font-normal leading-[28px] text-[#282938]'>All limited links</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Own analytics platform</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Chat support</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Optimize hashtags</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Unlimited users</span>
                 </div>
                 <Common_btn btntext="Get started" btnclass="btn4 mt-[79px] ml-[50px]"/>
              </div>
              
              <div className='bg-[#F4F6FC] hover:bg-[#1C1E53] hover:text-[#fff] duration-300 py-[64px] px-[74px] rounded-[8px]'>
                 <div className='flex items-center gap-x-[8px]'>
                    <Heading headtitle="$299" headclass="w-[95px] font-family text-[38px] leading-[56px] font-semibold"/>
                    <span className='text-[#2405F2]'>Per Design</span>
                 </div>
                 <Heading headtitle="Landing Page" headclass="mt-[20px] mb-[8px] w-[180px] font-family text-[24px] leading-[36px] font-normal"/>
                 <Paragraph paratitle="When you’re ready to go beyond prototyping in Figma," paraclass="w-[281px] font-family text-[16px] leading-[28px] font-normal mb-[76px]"/>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span className='w-[117px] text-[16px] font-normal leading-[28px]'>All limited links</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Own analytics platform</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Chat support</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Optimize hashtags</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Unlimited users</span>
                 </div>
                 <Common_btn btntext="Get started" btnclass="btn2 mt-[79px] ml-[50px]"/>
              </div>


              <div className='bg-[#F4F6FC] py-[64px] px-[74px] rounded-[8px]'>
                 <div className='flex items-center gap-x-[8px]'>
                    <Heading headtitle="$299" headclass="w-[95px] font-family text-[38px] leading-[56px] font-semibold"/>
                    <span className='text-[#2405F2]'>Per Design</span>
                 </div>
                 <Heading headtitle="Landing Page" headclass="mt-[20px] mb-[8px] w-[180px] font-family text-[24px] leading-[36px] font-normal"/>
                 <Paragraph paratitle="When you’re ready to go beyond prototyping in Figma," paraclass="w-[281px] font-family text-[16px] leading-[28px] font-normal mb-[76px]"/>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span className='w-[117px] text-[16px] font-normal leading-[28px] text-[#282938]'>All limited links</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Own analytics platform</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Chat support</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Optimize hashtags</span>
                 </div>
                 <div className='flex gap-x-[12px] items-center mt-[12px]'>
                    <img src={pointer} alt="Not Found" />
                    <span>Unlimited users</span>
                 </div>
                 <Common_btn btntext="Get started" btnclass="btn4 mt-[79px] flex items-center justify-center ml-[50px]"/>
              </div>


           </div>
        </div>
      </div>
    </>
  )
}

export default Pricingplan
