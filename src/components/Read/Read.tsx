import React from 'react'
import NameCard from '../NameCard/NameCard'
import TitleCard from '../TitleCard/TitleCard'
import ChapterCard from '../ChapterCard/ChapterCard'
import ReadBodyCard from '../ReadBodyCard/ReadBodyCard'
import ReadBox from '../ReadBox/ReadBox'

const Read = () => {
  return (
    <>
    <div className='w-full h-full pt-3 overflow-y-auto scrollHide'>

     <div className='w-full h-[85vh]  overflow-y-auto scrollHide'>
        <ReadBox/>
        <ReadBox/>
        <ReadBox/>
        <ReadBox/>
        <ReadBox/>
        <ReadBox/>
     </div>
    </div>
    </>
  )
}

export default Read