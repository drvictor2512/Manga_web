import React, { useEffect, useState } from 'react'
import './SingleMangaPage.css'
import apiClient from '../../API/apiClient';
import { useParams} from 'react-router-dom';
import Chapter from './Chapter';
import Loading2 from './../dist/Loading2';
import useData from '../hooks/useData';
const SingleMangaPage = () => {
  // const [manga, setManga] = useState([]);
  // const [errors, setErrors] = useState("");
  // const [loading, setLoading] = useState(false);
  const {id} = useParams();
  // useEffect(() => {
  //   setLoading(true);
  //   apiClient.get(`/manga/${id}`).then(res => {
  //     setManga(res.data)
  //       setLoading(false);
  //   }).catch(err => setErrors(err.message))
  // }, [])
  const {data : manga, error, isLoading} = useData(`/manga/${id}`, {}, ['manga', id])
  
  return (
    <section className='mangaDetailContainer'>
        {error && <em className='form_error'>{error}</em>}
        {isLoading && <Loading2 />}
        <div className="mangaDetail align_center">
            <img src={manga?.imageUrl} alt="" className='mangaDetailImg'/>
            <div className="mangaDetailInfo">
                {!isLoading && <> <h3>{manga?.name}</h3>
                <p>Author: {manga?.author}</p>
                <p>Status: {manga?.status}</p>
                <p>Views: {manga?.view}</p>
                <a className='genre'>{manga.genres ? manga?.genres.map((genre, index) => <p key={index}>{genre}</p>) : null}</a> </>}
            </div>
        </div>
        <p className='description'><Chapter id={id}/></p>
    </section>
  )
}

export default SingleMangaPage
