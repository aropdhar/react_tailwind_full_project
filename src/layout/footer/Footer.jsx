import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerLogo from '../../assets/logo.png'
import Paragraph from '../../component/paragraph/Paragraph'
import Heading from '../../component/heading/Heading'

const Footer = () => {
  return (
    <>
      <div className='common_background pt-[100px]'>
         <div className="container">
            <div className='flex gap-x-[142px] items-center justify-between'>

               <div>
                 <div>
                  <div className='w-[146px] h-[38px] overflow-hidden'>
                    <img className='w-full h-full' src={footerLogo} alt="Not Found" />
                  </div>
                    <Paragraph paratitle="We are always open to discuss your project and improve your online presence." paraclass="paragraph para_size font-family"/>
                 </div>

                 <div className='flex items-center w-[417px] gap-x-[29px] bg-[#FCD980] py-[16px] pl-[38px] mt-[106px]'>
                    <div>
                        <Heading headtitle="Email me at" headclass=" email_footer font-family" />
                        <Paragraph paratitle="contact@website.com" paraclass="web_footer font-family"/>
                    </div>
                    <div>
                        <Heading headtitle="Call us" headclass="footer_head font-family"/>
                        <Paragraph paratitle="0927 6277 28525" paraclass="web_footer font-family"/>
                    </div>
                 </div>
              </div>


              <div className='mt-[-90px]'>
                 <Heading headtitle="Lets Talk!" headclass='talk_head font-family'/>
                 <Paragraph paratitle="We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges." paraclass="paragraph mt-[14px] mb-[28px] font-family"/>
                 <div className='flex gap-x-[26px]'>
                   <FaFacebook className='icons_size'/>
                   <FaTwitter className='icons_size'/>
                   <FaInstagram className='icons_size'/>
                   <FaLinkedin className='icons_size'/>
                 </div>
              </div>

            </div>
         </div>
{/* footer navbar section */}

         <nav className='bg-[#FFFFFF] py-[18px] border'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div>
                      <Paragraph paratitle="Copyright 2022, Finsweet.com" paraclass='font-family'/>
                    </div>
                    <div className='flex gap-x-[32px]'>
                      <ul className='flex gap-x-[32px] items-center'>
                          <li><a className='nav_footer_text font-family' href="#">Home</a></li>
                          <li><a className='nav_footer_text font-family' href="#">About us</a></li>
                          <li><a className='nav_footer_text font-family' href="#">Features</a></li>
                          <li><a className='nav_footer_text font-family' href="#">Pricing</a></li>
                          <li><a className='nav_footer_text font-family' href="#">FAQ</a></li>
                          <li><a className='nav_footer_text font-family' href="#">Blog</a></li>
                      </ul>
                    </div>
                </div>  
            </div>
     </nav>
      </div>
    </>
  )
}

export default Footer
