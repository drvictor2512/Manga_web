import React, { useEffect, useState } from 'react'
import './Navbar.css'
import LinkNav from './LinksNav';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import GenresManga from '../MangaSection/GenresManga';
import logo from '../../assets/tmangalogo.png'
import { MangaSuggestion } from '../hooks/MangaSuggestion';
const Navbar = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedManga, setSelectedManga] = useState(-1);
    const navigate = useNavigate();
    const handleSubmit = () => {
        if(search != ""){
            const encodedSearch = encodeURIComponent(search);
            navigate(`/api/search/${encodedSearch.trim()}`);
        }
        setSuggestions([]);
    }
    
    useEffect(() => {
        const delaySuggest = setTimeout(() => {
            if(search.trim() !== ""){
                MangaSuggestion(search).then(res => setSuggestions(res.data)).catch(err => console.log(err))
            }else{
                setSuggestions([]);
            }
        }, 300)
        return () => clearTimeout(delaySuggest);
    }, [search])
    const handleKeyDown = (e) =>{
        if(selectedManga < suggestions.mangaList.length){
            if(e.key === "ArrowDown"){
              setSelectedManga(prev => prev === suggestions.length - 1 ? 0 :  prev + 1);
            }
            else if(e.key === "ArrowUp"){
              setSelectedManga(prev => prev === 0 ? suggestions.length - 1 : prev - 1);
            }
            else if(e.key === "Enter"){
              const suggestion = setSearch(suggestions.mangaList[selectedManga].title);
              navigate(`api/search/${suggestion.title}`);
              setSearch("");
              setSuggestions([]);
            }
          }else{
            setSelectedManga(-1);
          }
    }
    console.log(handleKeyDown)
  return (
    <div className='navbar align_center'>
        <div className='align_center'>
            <NavLink to='/' className='navtitle'><img className='logo' src={logo}/></NavLink>
            <form className='nav_form align_center' onSubmit={handleSubmit}>
                <input type="text" className='nav_search' placeholder='Search manga' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown}/>
                <button type='submit' className='search_button'>Search</button>
                 <ul className="search_result">
                 {suggestions && suggestions.mangaList && suggestions.mangaList.map((suggestion, index) =>
                    <li className={selectedManga === index ? 'search_suggestion_links active' : "search_suggestion_links"} key={suggestion.id}>
                        <Link onClick={() => {
                            setSearch("");
                            setSuggestions([]);
                        }} to={`/api/search/${suggestion.title}`}>{suggestion.title}</Link>
                    </li>
               )}
                </ul>
                
            </form>
        </div>
        <div className='nav_links align_center'>
            <LinkNav title="Home" link='/'/>
            <div className='genreContainer'>
                <div className='genre'>Genre</div>
                <div className='genre_dropdown'>
                    <GenresManga/>    
                </div>
            </div>
            <LinkNav title="Login" link='/login'/>
            <LinkNav title="Signup" link='/signup'/>
        </div>
    </div>
  )
}

export default Navbar