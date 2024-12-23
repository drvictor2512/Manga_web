import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MangaList from '../MangaSection/MangaList'
import SingleMangaPage from '../MangaSection/SingleMangaPage'
import ChapterDetail from '../MangaSection/ChapterDetail'
import MangaCategory from '../MangaSection/MangaCategory'
import LoginPage from './../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage'
import Search from '../Common/Search'
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<MangaList />} />
        <Route path='/mangaList' element={<MangaCategory />} />
        <Route path='/manga/:id' element={<SingleMangaPage />} />
        <Route path='/manga/:id/:ch' element={<ChapterDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/api/search/:query' element={<Search />} />
    </Routes>
  )
}

export default Routing