import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import { FaArrowRight } from "react-icons/fa6";
import blog_1 from '../../../assets/blog1.png'
import blog_2 from '../../../assets/blog 2.png'
import blog_3 from '../../../assets/blog 3.png'

const Blog = () => {
  return (
    <>
      <div className='bg-[#fff] pt-[20px] pb-[128px]'>
      <div className='container'>

        <div className='flex items-center gap-x-[32px]'>
           <div>
            <div className='w-[405px] h-[285px] overflow-hidden'>
              <img className='w-full h-full object-cover' src={blog_1} alt="Not Found" />
            </div>
            <Heading headtitle="19 Jan 2022" headclass="w-[93px] text-[16px] font-medium font-family leading-[28px] text-[#282938] mt-[40px] mb-[16px]"/>
            <Paragraph paratitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paraclass="w-[405px] text-[24px] font-normal font-family leading-[36px] text-[#282938] mb-[16px]"/>
            <Paragraph paratitle="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" paraclass="w-[405px] text-[16px] font-normal font-family leading-[28px] text-[#282938] mb-[16px]"/>

            <div className='flex items-center text-[#000] mt-[32px] gap-x-[16px] cursor-pointer'>
                <Paragraph paratitle="Read More" className="pricing"/>
                <FaArrowRight className='w-[24px] cursor-pointer'/>
            </div>
          </div>

          <div>
            <div className='w-[405px] h-[285px] overflow-hidden'>
              <img className='w-full h-full object-cover' src={blog_2} alt="Not Found" />
            </div>
            <Heading headtitle="19 Jan 2022" headclass="w-[93px] text-[16px] font-medium font-family leading-[28px] text-[#282938] mt-[40px] mb-[16px]"/>
            <Paragraph paratitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paraclass="w-[405px] text-[24px] font-normal font-family leading-[36px] text-[#282938] mb-[16px]"/>
            <Paragraph paratitle="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" paraclass="w-[405px] text-[16px] font-normal font-family leading-[28px] text-[#282938] mb-[16px]"/>

            <div className='flex items-center text-[#000] mt-[32px] gap-x-[16px] cursor-pointer'>
                <Paragraph paratitle="Read More" className="pricing"/>
                <FaArrowRight className='w-[24px] cursor-pointer'/>
            </div>
          </div>

          <div>
            <div className='w-[405px] h-[285px] overflow-hidden'>
              <img className='w-full h-full object-cover' src={blog_3} alt="Not Found" />
            </div>
            <Heading headtitle="19 Jan 2022" headclass="w-[93px] text-[16px] font-medium font-family leading-[28px] text-[#282938] mt-[40px] mb-[16px]"/>
            <Paragraph paratitle="How one Webflow user grew his single person consultancy from $0-100K in 14 months" paraclass="w-[405px] text-[24px] font-normal font-family leading-[36px] text-[#282938] mb-[16px]"/>
            <Paragraph paratitle="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" paraclass="w-[405px] text-[16px] font-normal font-family leading-[28px] text-[#282938] mb-[16px]"/>

            <div className='flex items-center text-[#000] mt-[32px] gap-x-[16px] cursor-pointer'>
                <Paragraph paratitle="Read More" className="pricing"/>
                <FaArrowRight className='w-[24px] cursor-pointer'/>
            </div>
          </div>

        </div>
        
      </div>
    </div>
    </>
  )
}

export default Blog
