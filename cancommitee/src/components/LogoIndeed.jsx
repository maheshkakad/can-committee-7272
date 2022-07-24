import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const LogoIndeed = () => {
  return (
    <div>
        
        <Search />
        <Link to="/" >Home</Link>
    </div>
  )
}

export default LogoIndeed