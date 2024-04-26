import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import blogbg from '../../../assets/blog.png'

const Blogbg = () => {
  return (
    <>
      <div className='py-[120px]'>
        <div className='container'>
           <div className='flex flex-col items-center justify-center'>
              <Heading headtitle="A UX Case Study on Creating a Studious Environment for Students" headclass="w-[949px] text-[48px] mx-auto leading-[64px] text-center font-semibold"/>
              <Paragraph paratitle="Andrew Jonson Posted on 27th January 2021" paraclass="mt-[16px] mb-[32px]"/>
           </div>
           <div className='text-center'>
              <img src={blogbg} alt="Not Found" />
              <Heading headtitle="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside." headclass="w-[831px] text-[16px] mx-auto leading-[28px] mt-[46px] mb-[16px]"/>
              <a href="#" className='text-[blue]'>Read More</a>
           </div>
        </div>
      </div>
    </>
  )
}

export default Blogbg
