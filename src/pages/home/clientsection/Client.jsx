import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import clients from '../../../assets/clients.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Client = () => {
  return (
    <div>
      <div className='bg-[#F4F6FC] py-[120px]'>
          <div className='container'>
            <div className='flex items-center gap-x-[110px]'>
                <div>
                    <Heading headtitle="What our clients say about us" headclass="w-[327px] text-[38px] font-semibold font-family leading-[56px]"/>
                    <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed." paraclass="w-[327px] font-normal mt-[16px] tex-[16px] text-[#282938]"/>  
                </div>
                <div>
                    <Paragraph paratitle='"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."' paraclass="w-[843px] font-family text-[32px] leading-[48px]"/>

                    <div className='mt-[40px] flex items-center justify-between'>
                      <div className='flex items-center gap-x-[10px]'>
                        <img className='rounded-[50%]' src={clients} alt="Not Found" />
                        <div>
                            <h3 className='w-[183px] text-[18px] font-family leading-[32px] font-normal text-[#282938]'>Jenny Wilson</h3>
                            <Paragraph paratitle="Vice President"/>
                        </div>
                      </div>
                      <div className='flex items-center gap-x-[15px]'>
                      <IoIosArrowBack className='text-[35px] p-[5px] bg-[#fff] text-[#000]  rounded-[50%] hover:bg-[#5239FA] hover:rounded-[50%] hover:text-[#fff] duration-200 cursor-pointer' />
                      <IoIosArrowForward className='text-[35px] p-[5px] bg-[#fff] text-[#000]  rounded-[50%] hover:bg-[#5239FA] hover:rounded-[50%] hover:text-[#fff] duration-200 cursor-pointer' />
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Client
