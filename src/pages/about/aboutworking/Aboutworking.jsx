import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import icons from '../../../assets/Icon.png'
import icons2 from '../../../assets/Icon 2.png'
import icons5 from '../../../assets/Icon 5.png'
import logo1 from '../../../assets/Logo 1.png'
import logo2 from '../../../assets/Logo 2.png'
import logo3 from '../../../assets/Logo 3.png'
import logo4 from '../../../assets/Logo 2.png'
import logo5 from '../../../assets/Logo 3.png'

const Aboutworking = () => {
  return (
    <>
      <div className='py-[128px]'>
        <div className='container'>
            
        <div className='flex flex-col items-center text-center justify-center'>
            <Heading headtitle="The benefits of working with us" headclass="w-[630px] font-family font-semibold text-[48px] leading-[64px] mt-[10px]"/>
          </div>
         
          <div className='mt-[47px] flex gap-[32px] flex-wrap'>
                <div className='bg-[#F4F6FC] p-[38px]'>
                    <img src={icons5} alt="Not Found" />
                    <Heading headtitle="Customize with ease" headclass="home_heading"/>
                    <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
                </div>
                <div className='bg-[#F4F6FC] p-[38px]'>
                    <img src={icons2} alt="Not Found" />
                    <Heading headtitle="Perfectly Responsive" headclass="home_heading"/>
                    <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
                </div>
                <div className='bg-[#F4F6FC] p-[38px]'>
                    <img src={icons} alt="Not Found" />
                    <Heading headtitle="Friendly Support" headclass="home_heading"/>
                    <Paragraph paratitle="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi." paraclass="home_paragraph"/>
                </div>
            </div>
          <div className='flex items-center gap-x-[75px] mt-[48px]'>
            <div>
                <Heading headtitle="100.000+" headclass="w-[176px] text-[38px] leading-[56px] font-family font-semibold"/>
                <Paragraph paratitle="Finsweet Users" paraclass="w-[124px] text-[16px] leading-[28px] font-family font-normal"/>
            </div>
            <div>
                <img src={logo1} alt="Not Found" />
            </div>
            <div>
                <img src={logo2} alt="Not Found" />
            </div>
            <div>
                <img src={logo3} alt="Not Found" />
            </div>
            <div>
                <img src={logo4} alt="Not Found" />
            </div>
            <div>
                <img src={logo5} alt="Not Found" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutworking
