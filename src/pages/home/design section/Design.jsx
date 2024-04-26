import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import icons from '../../../assets/Icon.png'
import icons1 from '../../../assets/Icon 1.png'
import icons2 from '../../../assets/Icon 2.png'
import icons3 from '../../../assets/Icon 3.png'
import icons4 from '../../../assets/Icon 4.png'
import icons5 from '../../../assets/Icon 5.png'

const Design = () => {
  return (
    <>
      <div className='bg-[#F4F6FC] py-[126px]'>
        <div className='container'>
          <div className='flex flex-col items-center text-center justify-center'>
            <Paragraph paratitle="Features" paraclass="w-[419px] font-family font-medium text-[16px] leading-[28px]"/>
            <Heading headtitle="Design that solves problems, one product at a time" headclass="w-[630px] font-family font-semibold text-[48px] leading-[64px] mt-[10px]"/>
          </div>

          <div className='mt-[47px] flex gap-[32px] flex-wrap'>
            <div className='bg-[#FFFFFF] p-[38px]'>
              <img src={icons} alt="Not Found" />
              <Heading headtitle="Uses Client First" headclass="home_heading"/>
              <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
            </div>
            <div className='bg-[#FFFFFF] p-[38px]'>
              <img src={icons1} alt="Not Found" />
              <Heading headtitle="Two Free Revision Round" headclass="home_heading"/>
              <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
            </div>
            <div className='bg-[#FFFFFF] p-[38px]'>
              <img src={icons2} alt="Not Found" />
              <Heading headtitle="Template Customization" headclass="home_heading"/>
              <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
            </div>
            <div className='bg-[#FFFFFF] p-[38px]'>
              <img src={icons3} alt="Not Found" />
              <Heading headtitle="24/7 Support" headclass="home_heading"/>
              <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
            </div>
            <div className='bg-[#FFFFFF] p-[38px]'>
              <img src={icons4} alt="Not Found" />
              <Heading headtitle="Quick Delivery" headclass="home_heading"/>
              <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
            </div>
            <div className='bg-[#FFFFFF] p-[38px]'>
              <img src={icons5} alt="Not Found" />
              <Heading headtitle="Hands-on approach" headclass="home_heading"/>
              <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Design
