import Header from '@/components/Header'
import React from 'react'

function RootLayout({ children }) {
    return (
        <div className='w-full h-[100vh] bg-linear-to-tr from-indigo-900 via-indigo-950 to-black'>
            <Header />
            {children}
        </div>
    )
}

export default RootLayout
