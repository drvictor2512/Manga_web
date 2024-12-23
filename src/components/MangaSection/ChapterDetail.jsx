import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import apiClient from '../../API/apiClient';
import './ChapterDetail.css'
import useData from '../hooks/useData';
import ChapterDetailImg from './ChapterDetailImg';
const ChapterDetail = () => {
    // const [chapters, setchapters] = useState([]);
    const {id, ch} = useParams();
    // useEffect(() => {
    //     apiClient.get(`/manga/${id}/${ch}`).then(res => {
    //       setchapters(res.data.images)
    //     }).catch(err => console.log(err))
    // }, [])
    const {data : chapters} = useData(`/manga/${id}/${ch}`, {}, ['manga', id, ch]);
    const [chapterPrefix, chapterNumber] = ch.split('-');
    const [currentChap, setCurrentChap] = useState(ch);
    const handleSelectChange = (e) => {
        setCurrentChap(e.target.value);
        window.location = e.target.value;
      }
  return (
    <div className='chapDetail'>
      <div className='chapdtitle'>
        <Link to={`/manga/${id}`}>{chapters?.title}</Link>
        <h2>- {chapters?.currentChapter}</h2>
      </div>
      {chapters?.images.map((chap, index) => <ChapterDetailImg key={index} images={chap.image}/>)}
      <div className='chapdbutton'>
        <Link to={`/manga/${id}/${chapterPrefix}-${parseInt(chapterNumber) - 1}`}><button disabled={ch === "chapter-1"}>Previous</button></Link>
        <select value={currentChap} onChange={handleSelectChange}>
          {chapters?.chapterListIds.map((chap) => <option key={chap.id}>{chap.id}</option>)}
        </select>
        <Link to={`/manga/${id}/${chapterPrefix}-${parseInt(chapterNumber) + 1}`}><button disabled={(chapters?.currentChapter === chapters?.chapterListIds[0]?.id) - 1}>Next</button></Link>
      </div>
    </div>
  )
}

export default ChapterDetail