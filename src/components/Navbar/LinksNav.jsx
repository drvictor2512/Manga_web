import React from 'react'
import './LinksNav.css' 
import { NavLink } from 'react-router-dom'
const LinksNav = ({title, link}) => {
  return (
     <NavLink to={link}>{title}</NavLink> 
  )
}

export default LinksNav