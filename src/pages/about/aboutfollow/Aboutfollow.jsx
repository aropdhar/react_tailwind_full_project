import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import aboutcircle from '../../../assets/aboutcircle.png'
import aboutline from '../../../assets/about_line.png'


const Aboutfollow = () => {
  return (
    <>
      <div className='py-[128px]'>
        <div className='container'>
            <Heading headtitle="The process we follow" headclass="text-center w-[532px] mx-auto font-family text-[48px] font-semibold leading-[64px] text-[#282938]"/>
            <div className='mt-[60px] flex items-center gap-x-[56px]'>
                <div className='relative'>
                    <img src={aboutcircle} alt="Not Found" />
                    <Heading headtitle="Planning" headclass="w-[296px] font-family font-medium text-[24px] leading-[36px] mt-[32px] mb-[8px]"/>
                    <Paragraph paratitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." paraclass="w-[272px] font-family font-normal text-[16px] leading-[28px] "/>
                    <img  className='absolute w-[200px] top-[10px] left-[30px]' src={aboutline} alt="Not Found" />
                </div>

                <div className='relative'>
                    <img src={aboutcircle} alt="Not Found" />
                    <Heading headtitle="Conception" headclass="w-[296px] font-family font-medium text-[24px] leading-[36px] mt-[32px] mb-[8px]"/>
                    <Paragraph paratitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." paraclass="w-[272px] font-family font-normal text-[16px] leading-[28px] "/>
                    <img  className='absolute w-[200px] top-[10px] left-[30px]' src={aboutline} alt="Not Found" />
                </div>

                <div className='relative'>
                    <img src={aboutcircle} alt="Not Found" />
                    <Heading headtitle="Design" headclass="w-[296px] font-family font-medium text-[24px] leading-[36px] mt-[32px] mb-[8px]"/>
                    <Paragraph paratitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." paraclass="w-[272px] font-family font-normal text-[16px] leading-[28px] "/>
                    <img  className='absolute w-[200px] top-[10px] left-[30px]' src={aboutline} alt="Not Found" />
                </div>

                <div className='relative'>
                    <img src={aboutcircle} alt="Not Found" />
                    <Heading headtitle="Development" headclass="w-[296px] font-family font-medium text-[24px] leading-[36px] mt-[32px] mb-[8px]"/>
                    <Paragraph paratitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." paraclass="w-[272px] font-family font-normal text-[16px] leading-[28px] "/>
                    <img  className='absolute w-[200px] top-[10px] left-[30px]' src={aboutline} alt="Not Found" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Aboutfollow
