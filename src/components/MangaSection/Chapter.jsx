import React, { useEffect, useState } from 'react'
import apiClient from '../../API/apiClient';
import './Chapter.css'
import ChapterList from './ChapterList';
import useData from '../hooks/useData';
const Chapter = ({id}) => {
    // const [chapters, setChapter] = useState([]);
    // useEffect(() => {
    //     apiClient.get(`/manga/${id}`).then(res => setChapter(res.data.chapterList)).catch(err => console.log(err))
    // }, [])
    const{data : chapters} = useData(`/manga/${id}`, {}, ['chapterList', id])
  return (
    <div className='chapContainer'>
        <h1 className='title'>Chapter List</h1>
        <div className="chapterlist">
            {chapters?.chapterList.map(chapter => <ChapterList chapter={chapter} key={chapter.id} mangaId={id}/>)}
        </div>
    </div>
  )
}

export default Chapter