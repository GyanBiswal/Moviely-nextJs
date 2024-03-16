'use-client'
import React from 'react'
import { ThemeProvider }  from 'next-themes'

export default function Provider({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-black dark:text-gray-200 dark:bg-black min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}
