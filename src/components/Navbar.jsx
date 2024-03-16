import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  return (
    <div className='flex justify-center gap-6 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg cursor-pointer'>
        <NavbarItems title="Trending" param="fetchTrending"/>
        <NavbarItems title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
