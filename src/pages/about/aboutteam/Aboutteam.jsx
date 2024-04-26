import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import man1 from '../../../assets/man_1.png'
import man2 from '../../../assets/man_2.png'
import man3 from '../../../assets/man_3.png'
import man4 from '../../../assets/man_4.png'


const Aboutteam = () => {
  return (
    <>
      <div className='bg-[#F4F6FC] py-[128px]'>
        <div className='container'>
            <div>
               <Heading headtitle="Meet our team" headclass="flex justify-center w-[357px] mx-auto font-family font-semibold text-[48px] leading-[64px]"/>
            </div>
            <div className='flex mt-[20px] items-center gap-x-[32px]'>

                <div className='bg-[#FFFFFF] text-center px-[44px] pt-[48px] pb-[38px]'>
                    <img className='ml-[20px]' src={man1} alt="Not Found" />
                    <Heading headtitle="John Smith" headclass="w-[208px] text-[24px] font-family font-normal leading-[36px] mt-[10px] mb-[8px]"/>
                    <Paragraph paratitle="CEO"/>
                </div>

                <div className='bg-[#FFFFFF] text-center px-[44px] pt-[48px] pb-[38px]'>
                    <img className='ml-[20px]' src={man2} alt="Not Found" />
                    <Heading headtitle="Simon Adams" headclass="w-[208px] text-[24px] font-family font-normal leading-[36px] mt-[10px] mb-[8px]"/>
                    <Paragraph paratitle="CTO"/>
                </div>

                <div className='bg-[#FFFFFF] text-center px-[44px] pt-[48px] pb-[38px]'>
                    <img className='ml-[20px]' src={man3} alt="Not Found" />
                    <Heading headtitle="Paul Jones" headclass="w-[208px] text-[24px] font-family font-normal leading-[36px] mt-[10px] mb-[8px]"/>
                    <Paragraph paratitle="Design Lead"/>
                </div>

                <div className='bg-[#FFFFFF] text-center px-[44px] pt-[48px] pb-[38px]'>
                    <img className='ml-[20px]'  src={man4} alt="Not Found" />
                    <Heading headtitle="Sara Hardin" headclass="w-[208px] text-[24px] font-family font-normal leading-[36px] mt-[10px] mb-[8px]"/>
                    <Paragraph paratitle="Project Manager"/>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Aboutteam
