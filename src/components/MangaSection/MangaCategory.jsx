import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './MangaCategory.css'
import MangaCard from './MangaCard';
import apiClient from '../../API/apiClient';
import Loading from '../dist/Loading';
import Pagination from '../Common/Pagination';
const MangaCategory = () => {
  const [loading, setLoading] = useState(false);
  const skeleton = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const [errors, setErrors] = useState("");
  const[search, setSearch] = useSearchParams();
  const category = search.get('category');
  const type = search.get('type');
  const page = search.get('page');
  const [mangas, setMangas] = useState([]);

  const handlePageChange = (page) => {
      const currentParams = Object.fromEntries([...search]);
      setSearch({...currentParams ,page: page});
  }
  useEffect(() => {
    setLoading(true);
    apiClient.get('/mangaList', {
      params: {
        category: category,
        type: type,
        page: page,
      }
    }).then(res => {
      setMangas(res.data.mangaList)
      setLoading(false);
    }).catch(err => {
      setErrors(err.message)
      setLoading(false);
    });
  }, [category, type, page]);
  return (
    <section className='manga_list_section'>
          <div>
            {type == "topview" && <h2>Popular Manga:</h2>}
            {type == "newest" && <h2>Latest Manga:</h2>}
            {category && <h2>{category} Manga:</h2>}
            <div className='title_wrapper'>
              {errors && <em className='form_error'>{errors}</em>}
              {loading ? skeleton.map((n) =>  <Loading key={n}/>):
              mangas.map(manga => <MangaCard key={manga.id} manga={manga}/>)}
            </div>
          </div>
          <Pagination totalPages={100} onclick={handlePageChange} currentPage={page}/>
    </section>
  )
}

export default MangaCategory