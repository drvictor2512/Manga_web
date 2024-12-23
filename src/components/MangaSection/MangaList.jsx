import React, { useEffect, useState } from 'react'
import './MangaList.css'
import star from '../../assets/icons8-star-96.png'
import fire from '../../assets/icons8-fire-96.png'
import arrow from '../../assets/icons8-arrow-48.png'
import MangaCard from './MangaCard'
import { Link, NavLink } from 'react-router-dom'
import Loading from '../dist/Loading'
import useData from '../hooks/useData'
const MangaList = () => {
  // const [mangas, setMangas] = useState([]);
  // const [errors, setErrors] = useState("");
  // const [loading, setLoading] = useState(false);
  // const skeleton = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  // useEffect(() => { 
  //   setLoading(true);
  //   apiClient.get('/mangaList').then(res => {
  //     setMangas(res.data.mangaList)
  //     setLoading(false);
  //   }).catch(err => {
  //     setErrors(err.message)
  //     setLoading(false);
  //   });
  // }, []);
  const skeleton = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16,17, 18];
  const {data : mangas ,error, isLoading} = useData('/mangaList', {}, ['mangaList'])
  return (
    <section className='manga_list_section'>
        <div>
          <header className='align_center manga_list_header'>
              <h2>Latest Manga <img src={fire} alt="" className='icon'/></h2>
              <NavLink to="/mangaList?type=newest">See more <img className='arrow_icon' src={arrow} /></NavLink>
          </header>
          <div className='title_wrapper'>
            {isLoading && skeleton.map((n) => <Loading key={n}/>) }
            {error && <em className='form_error'>{error}</em>}
            {mangas?.mangaList.map(manga => <MangaCard key={manga.id} manga={manga}/>)}
          </div>
        </div>
        <div> 
          <header className='align_center manga_list_header' >
              <h2>Popular Manga <img src={star} alt="" className='icon'/></h2>
              <NavLink to="/mangaList?type=topview">See more <img className='arrow_icon' src={arrow} /></NavLink>
          </header>
          <div className='title_wrapper'>
            {isLoading && skeleton.map((n) => <Loading key={n}/>)}
            {error && <em className='form_error'>{error}</em>}
            {mangas?.mangaList.map(manga => (<MangaCard key={manga.id} manga={manga}/>))}
          </div>
        </div>
    </section>
  )
}

export default MangaList