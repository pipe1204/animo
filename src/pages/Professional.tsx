import React from 'react'

//components
import TopMain from '../components/TopMain'
import LeftColumn from '../components/LeftColumn'
import RightColumn from '../components/RightColumn'

const Professional = () => {
  return (
    <div className='main--div'>
      <LeftColumn />
      <div className='mid--column'>
        <TopMain />
      </div>
      <RightColumn />
    </div>
  )
}

export default Professional