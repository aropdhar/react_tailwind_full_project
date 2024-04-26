import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Question from './questionsection/Question'
import Work from './worksection/Work'
import Background from './backgroundsection/Background';
import Project from './projectsection/Project';
import Design from './design section/Design';
import Client from './clientsection/Client';
import Building from './buildingsection/Building';
import Blog from './blogsection/Blog';


const Home = () => {
  

  return (
    <>
  

     <Background/>
     <Work/>
     <Project/>
     <Design/>
     <Client/>
     <Question/>
     <Building/>
     <Blog/>



  </>
  )
}

export default Home 
