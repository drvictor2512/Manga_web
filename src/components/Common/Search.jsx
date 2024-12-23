import React, { useEffect, useState } from 'react'
import './Search.css'
import useData from '../hooks/useData';
import { useParams } from 'react-router-dom';
import MangaCard from './../MangaSection/MangaCard';
import apiClient from '../../API/apiClient';
import Loading from '../dist/Loading';
const Search = () => {
  const {query} = useParams();
  const [currMg, setCurrMg] = useState([]);
  const [filterMg, setFilterMg] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeleton = [1,2,3,4,5,6,7,8,9,10];
    useEffect(() => {
      setLoading(true);
        apiClient.get(`/search/${query}`).then(res => {
            setCurrMg(res.data);
            setFilterMg(res.data);
            setLoading(false);
        }).catch(err => console.log(err))
    }, [query])
    const filterManga = () => {
      const filter = currMg.mangaList.filter(manga => manga.title.toLowerCase() === query.toLowerCase());
      setFilterMg(filter);
    }
  return (
    <section className='container_search'>
        <div className='title_wrapper'>
        {loading && skeleton.map((n) => <Loading key={n}/>)}
    
        {filterMg && filterMg.mangaList && filterMg.mangaList.length > 0 ? (
        filterMg.mangaList.map(manga => <MangaCard manga={manga} key={manga.id} />)
      ) : (
        !loading && <div>Not Found</div>
      )}
       
        </div>
    </section>
  )
}

export default Search