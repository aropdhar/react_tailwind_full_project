import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Featurequestion = () => {
  return (
    <>
      <div>
       <div className='py-[120px]'>
        <div className='container'>
           <div className='flex gap-x-[136px]'>
          <div>
              <Heading headtitle="Frequently asked questions" headclass="w-[328px] text-[38px] font-family font-semibold leading-[56px] text-[#282938]"/>
              <Paragraph paratitle="Contact us for more info" paraclass="w-[220px] text-[18px] font-family leading-[32px] text-[#2405F2] mt-[16px]"/>
          </div>

          <div>

              <div className='flex mb-[48px]  justify-between'>
                <div className='flex gap-x-[59px]'>
                    <Heading headtitle="01" headclass="text-[24px] font-family font-normal text-[#2405F2]"/>
                <div>
                  <Heading headtitle="How much time does it take?" headclass="w-[350px] text-[24px] font-medium leading-[36px] text-[#282938]"/>
                  <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." paraclass="w-[624px] text-[18px] font-medium leading-[32px] font-family text-[#282938] mt-[16px]"/>
                </div>
                </div>
                <div>
                  <IoMdClose />
                </div>
              </div>

              <div className='flex border-t-2 pt-[32px] mb-[32px] justify-between'>
                <div className='flex gap-x-[59px]'>
                    <Heading headtitle="02" headclass="text-[24px] font-family font-normal text-[#2405F2]"/>
                <div>
                  <Heading headtitle="What is your class naming convention?" headclass="w-[476px] text-[24px] font-medium leading-[36px] text-[#282938]"/>
                </div>
                </div>
                <div>
                <FaPlus />
                </div>
              </div>

              <div className='flex border-t-2 pt-[32px] mb-[32px] justify-between'>

                <div className='flex gap-x-[59px]'>
                    <Heading headtitle="03" headclass="text-[24px] font-family font-normal text-[#2405F2]"/>
                <div>
                  <Heading headtitle="How do you communicate?" headclass="w-[476px] text-[24px] font-medium leading-[36px] text-[#282938]"/>
                </div>
                </div>
                <div>
                <FaPlus />
                </div>

              </div>


              <div className='flex border-t-2 pt-[32px] mb-[32px]   justify-between'>
                <div className='flex gap-x-[59px]'>
                    <Heading headtitle="04" headclass="text-[24px] font-family font-normal text-[#2405F2]"/>
                <div>
                  <Heading headtitle="I have a bigger project. Can you handle it?" headclass="w-[476px] text-[24px] font-medium leading-[36px] text-[#282938]"/>
                </div>
                </div>
                <div>
                <FaPlus />
                </div>
              </div>

              <div className='flex border-t-2 pt-[32px] mb-[32px]  justify-between'>
                <div className='flex gap-x-[59px]'>
                    <Heading headtitle="05" headclass="text-[24px] font-family font-normal text-[#2405F2]"/>
                <div>
                  <Heading headtitle="What is your class naming convention?" headclass="w-[476px] text-[24px] font-medium leading-[36px] text-[#282938]"/>
                </div>
                </div>
                <div>
                <FaPlus />
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Featurequestion
