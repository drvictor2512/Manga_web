import React from 'react'
import './ChapList.css'
import { Link } from 'react-router-dom'
const ChapterList = ({chapter, mangaId}) => {
  return (
    <div className='chapInfo align_center'>
        <Link to={`/manga/${mangaId}/${chapter.id}`} >{chapter.id}</Link>
        <p>{chapter.createdAt}</p>
    </div>
  )
}

export default ChapterList