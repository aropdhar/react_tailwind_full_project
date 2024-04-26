import React from 'react'

const Heading = ({headtitle , headclass }) => {
  return (
    <div>
      <p className={headclass} >{headtitle}</p>
    </div>
  )
}

export default Heading
