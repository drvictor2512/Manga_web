import React from 'react'

const Links = ({links, title}) => {
  return (
    <a href={links}>{title}</a>
  )
}

export default Links