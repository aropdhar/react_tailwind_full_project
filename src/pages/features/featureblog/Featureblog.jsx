import React from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import featureblog1 from '../../../assets/feature_1.png'
import featureblog2 from '../../../assets/feature_2.png'
import featureblog3 from '../../../assets/feature_3.png'
import featureblog4 from '../../../assets/feature_4.png'


const Featureblog = () => {
  return (
    <>
      <div className='bg-[#fff] py-[128px]'>
         <div className='container'>

            <div className='flex items-center gap-x-[140px]'>
               <div>
                   <Heading headtitle="Use Client-first" headclass="w-[136px] text-[18px] font-family font-medium leading-[32px] text-[#282938]"/>
                   <Heading headtitle="Top agencies and freelancers around the world use Client-first " headclass="w-[623px] text-[38px] font-family font-semibold leading-[56px] my-[16px] text-[#282938]"/>
                   <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[623px] text-[16px] font-family font-normal leading-[28px] text-[#282938]"/>
               </div>
               <div className='w-[515px] h-[336px] overflow-hidden'>
                  <img className='w-full h-full object-cover' src={featureblog1} alt="Not Found" />
               </div>
            </div>
         </div>
      </div>

      <div className='bg-[#EEF4FA] py-[128px]'>
         <div className='container'>
         <div className='flex items-center mt-[40px] gap-x-[140px]'>
                <div className='w-[515px] h-[336px] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={featureblog2} alt="Not Found" />
                </div>
               <div>
                   <Heading headtitle="Free Revision Rounds" headclass="w-[191px] text-[18px] font-family font-normal leading-[32px] text-[#282938]"/>
                   <Heading headtitle="Get free Revisions and one week of free maintenance" headclass="w-[623px] text-[38px] font-family font-semibold leading-[56px] my-[16px] text-[#282938]"/>
                   <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[623px] text-[16px] font-family font-normal leading-[28px] text-[#282938]"/>
               </div>
               
            </div>
         </div>
      </div>

      <div className='bg-[#fff] py-[128px]'>
         <div className='container'>
            <div className='flex items-center mt-[40px] gap-x-[140px]'>
             
             <div>
                 <Heading headtitle="24/7 Support" headclass="w-[119px] text-[18px] font-family font-medium leading-[32px] text-[#282938]"/>
                 <Heading headtitle="Working with us, you will be getting 24/7 priority support" headclass="w-[623px] text-[38px] font-family font-semibold leading-[56px] my-[16px] text-[#282938]"/>
                 <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[623px] text-[16px] font-family font-normal leading-[28px] text-[#282938]"/>
             </div>
             
                <div className='w-[515px] h-[336px] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={featureblog3} alt="Not Found" />
                </div>
          </div>
         </div>
      </div>

      <div className='bg-[#FCD9801A] py-[128px]'>
         <div className='container'>
            <div className='flex items-center mt-[40px] gap-x-[140px]'>
            <div className='w-[515px] h-[336px] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={featureblog4} alt="Not Found" />
            </div>

            <div>
                 <Heading headtitle="Quick Delivery" headclass="w-[115px] text-[16px] font-family font-medium leading-[28px] text-[#282938]"/>
                 <Heading headtitle="Guranteed 1 week delivery for standard five pager website" headclass="w-[623px] text-[38px] font-family font-semibold leading-[56px] my-[16px] text-[#282938]"/>
                 <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." paraclass="w-[623px] text-[16px] font-family font-normal leading-[28px] text-[#282938]"/>
             </div>
                           
          </div>
         </div>
      </div>
    </>
  )
}

export default Featureblog
