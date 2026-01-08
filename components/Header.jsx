import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='w-full h-24 border-b-[1px] border-[#9e9e9e3b] bg-[#bbbbbb21] flex'>
            <div className='w-1/3 h-full flex items-center'>
                <p className='text-2xl font-bold text-slate-200 ml-8'>Mallah Beauty Center</p>
            </div>
            <div className='w-1/3 h-full flex items-center justify-center space-x-5 text-slate-200 text-lg'>
                <Link href={"#"}>Home</Link>
                <Link href={"#"}>Product`s</Link>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>ContactUs</Link>
            </div>
            <div className='w-1/3 h-full flex items-center' dir='rtl'>
                <button className='px-4 py-1  text-lg text-slate-200 mr-8 rounded-sm shadow-[0_0_15px_white] hover:shadow-[0_0_20px_white]'>SignUp</button>
            </div>
        </header>
    )
}

export default Header
