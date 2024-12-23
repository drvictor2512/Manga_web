import React, { useEffect, useState } from 'react'
import apiClient from './../../API/apiClient';
import './GenresManga.css'
import Links from '../Navbar/Links';
import useData from '../hooks/useData';
const GenresManga = () => {
    // const [genres, setGenres] = useState([]);
    // useEffect(() => {
    //     apiClient.get('/mangaList').then(res => setGenres(res.data.metaData.category))
    // }, [])
    const {data : genres} = useData('/mangaList', {}, ['metaData', 'category']);
  return (
        <div className='genretitle'>
            {genres && genres?.metaData.category.map((genre) => <Links key={genre.id}  title={genre.name} links={`/mangaList?category=${genre.id}`} genreManga={true}/>)}
        </div>
  )
}

export default GenresManga