import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Common_btn = ({btntext , btnclass , btnonclick }) => {
  return (
    <div>

       <button onClick={btnonclick} href="#" className={btnclass}>{btntext}</button>
       
    </div>
    
  )
}

export default Common_btn
