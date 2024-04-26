import React from 'react'

const Paragraph = ({paratitle , paraclass}) => {
  return (
    <div>
       <p className={paraclass}>{paratitle}</p>
    </div>
  )
}

export default Paragraph
