import React from 'react'
import './MangaCard.css'
import { useNavigate } from 'react-router-dom'
const MangaCard = ({manga}) => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate(`/manga/${manga.id}`);
  }
  
  return (
    <article className='magaCard'>
        <div className="mangaImg">
           <img src={manga.image} alt=""  onClick={handleClick}/>
        </div>
        <div className="mangaInfo">
            <h3 className='manga_title'>{manga.title.length < 35 ? manga.title : manga.title.slice(0, 20) + '...'}</h3>
            <p>{manga.chapter}</p>
        </div>
    </article>
  )
}

export default MangaCard