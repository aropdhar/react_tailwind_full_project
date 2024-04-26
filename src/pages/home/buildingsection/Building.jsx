import React, { useState } from 'react'
import Heading from '../../../component/heading/Heading'
import Paragraph from '../../../component/paragraph/Paragraph'
import Common_btn from '../../../component/common_btn/Common_btn'
import building from '../../../assets/building.png'
import { getDatabase, ref, set, push} from "firebase/database";
import { FaArrowRight } from "react-icons/fa6";

const Building = () => {

    const db = getDatabase();

  let [text , setText] = useState({
    name:"",
    email:"",
    url:""
  });

  let [error , setError] = useState({
    name:"",
    email:"",
    url:""
  })
  

  let nameregex = /^[a-zA-Z ]{2,40}$/;
  let emailregex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let urlregex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  let handleinput = (e) =>{

    let {name , value} = e.target
    setText({...text , [name]:value})

  }

  let handleClick = () =>{
    
    if(text.name == ""){
      setError({name: "Please Enter Your Name"});
    }

    else if(!text.name.match(nameregex)){
      setError({name: "Please Enter Your Valid Name"});
    }

    else if(text.email == ""){
      setError({name: ""});
      setError({email: "Please Enter Your Email"});
    }
    
    else if(!text.email.match(emailregex)){
      setError({email: "Please Enter Your Valid Email"});
    }

    else if(text.url == ""){
      setError({email: ""});
      setError({url: "Please Enter Your Social Url"});
    }
    
    else if(!text.url.match(urlregex)){
      setError({url: "Please Enter Your Valid Url / example: https://www.example.com"});
    }

    else{
      
      set(push(ref(db, 'SendinquiryData')), {
        Name: text.name,
        Email: text.email,
        Url: text.url
      }).then(()=>{
        setError({url:""});
      });
    }

  }

  return (
    <>
       <div className='pt-[10px] pb-[128px]'>
      <div className='container'>
        <div className='flex'>
            <div className='relative'>
                <div className='w-[656px] h-[691px] overflow-hidden '>
                  <img className='w-full h-full object-cover image_overlay' src={building} alt="Not Found" />
                </div>
                <div className='absolute left-0 top-0 p-[40px]'>
                  <Heading headtitle="Building stellar websites for early startups" headclass="w-[464px] text-[54px] leading-[74px] font-semibold text-[#fff]"/>
                  <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." paraclass=" w-[464px] text-[16px] text-[#FFFFFF] mt-[24px] font-semibold"/>
                </div>
            </div>
            <div className='bg-[#1C1E53] py-[48px] px-[96px]'>
              <Heading headtitle="Send inquiry" headclass="w-[432px] text-[32px] font-normal font-family leading-[48px] text-[#fff]"/>
              <Paragraph paratitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." paraclass="w-[432px] text-[16px] font-medium font-family leading-[28px] mt-[16px] mb-[48px] text-[#fff]"/>
              <input onChange={handleinput} name='name' className='input_handle' type="text" placeholder='Enter Your Name' />
              <Paragraph paratitle={error.name} paraclass="text-[#fff] mt-[10px]"/>

              <input onChange={handleinput} name='email' className='input_handle mt-[16px]' type="email" placeholder='Enter Your Email' />
              
              <Paragraph paratitle={error.email} paraclass="text-[#fff] mt-[10px]"/>

              <input onChange={handleinput} name='url' className='input_handle' type="url" placeholder='Enter Your Url' />
              
              <Paragraph paratitle={error.url} paraclass="text-[#fff] mt-[10px]"/>

              <Common_btn btnonclick={handleClick} btntext="Send an Inquiry" btnclass="btn3"/>

              <div className='flex items-center common_text_color mt-[36px] gap-x-[16px] justify-center cursor-pointer'>
                  <Paragraph paratitle="Get in touch with us" className="pricing"/>
                  <FaArrowRight className='w-[24px] cursor-pointer'/>
              </div>
            </div>
        </div>
      </div>
       </div>
    </>
  )
}

export default Building
