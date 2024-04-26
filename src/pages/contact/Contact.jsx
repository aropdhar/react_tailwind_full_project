import React, { useState } from 'react'
import Common_btn from '../../component/common_btn/Common_btn'
import { getDatabase, ref, set , push } from "firebase/database";
import Paragraph from '../../component/paragraph/Paragraph';

const Contact = () => {
   
    const db = getDatabase();

    let [text , setText] = useState({
        name:"",
        email:"",
        context:"",
        subject:"",
        message:""
    });

    let [error , setError] = useState({
        name:"",
        email:"",
        context:"",
        subject:"",
        message:""
    });

    let handleinput = (e) =>{
      let {name , value} = e.target
      setText({...text , [name]:value})
    }
    
    let handlebtn = () =>{
        if(text.name == ""){
            setError({name:"Please Enter Your Name"});
        }

        else if(text.email == ""){
            setError({name:""});
            setError({email:"Please Enter Your Email"});
        }

        else if(text.context == ""){
            setError({email:""});
            setError({context:"Please Enter Your Context"});
        }

        else if(text.subject == ""){
            setError({context:""});
            setError({subject:"Please Enter Your Subject"});
        }

        else if(text.message == ""){
            setError({subject:""});
            setError({message:"Please Enter Your Message"});
        }

        else{
            setError({message:""});
            set(push(ref(db, 'contactinfo')), {
                Name: text.name,
                Email: text.email,
                Context: text.context,
                Subject: text.subject,
                Message: text.message
              });
            }
        }


  return (
    <>
      <div className='py-[120px]'>
        <div className='container'>
            <div className='w-[850px] mx-auto rounded-[10px] bg-[#F4F6FC] py-[55px] px-[74px]'>
              <div className='flex items-center gap-x-[32px]'>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="">Name</label>
                    <input onChange={handleinput} name='name' className='w-[338px] py-[10px] pl-[10px] border-2 border-[#000] rounded-[10px]' type="email" placeholder='Please Enter Your First Name'/>
                    <Paragraph paratitle={error.name}/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="">Email</label>
                    <input onChange={handleinput} name='email'  className='w-[338px] py-[10px] pl-[10px] border-2 border-[#000] rounded-[10px]' type="text" placeholder='Please Enter Your Email'/>
                    <Paragraph paratitle={error.email}/>
                </div>
              </div>

              <div className='flex items-center mt-[30px] mb-[30px] gap-x-[32px]'>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="">Provide Context</label>
                    <input onChange={handleinput} name='context'  className='w-[338px] py-[10px] pl-[10px] border-2 border-[#000] rounded-[10px]' type="text" placeholder='provide context'/>
                    <Paragraph paratitle={error.context}/>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <label htmlFor="">Subject</label>
                    <input onChange={handleinput} name='subject'  className='w-[338px] py-[10px] pl-[10px] border-2 border-[#000] rounded-[10px]' type="text" placeholder='Select Subject'/>
                    <Paragraph paratitle={error.subject}/>
                </div>
              </div>
              <textarea onChange={handleinput} name="message" placeholder='Enter Your Message' id="" cols="80" rows="10" className='py-[10px] pl-[10px] rounded-[10px] border-2 border-[#000]'>Please Enter Your Message</textarea>
              <Paragraph paratitle={error.message}/>
              <Common_btn btnonclick={handlebtn} btntext="Send Messege" btnclass="btn4 mt-[20px]"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
