import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='w-full h-[680px] flex mb-0'>
            <div className='w-1/2 h-full flex items-center justify-center'>
                <div className='w-[500px] h-[500px] text-slate-200 space-y-3'>
                    <p className='text-slate-200 text-6xl mt-20'>poyan Gaming Center</p>
                    <p className=' text-5xl'>The First & Best</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus consectetur ex cumque suscipit itaque harum fuga, deserunt rem quae. Quasi, sint? Ullam iste repellendus voluptate architecto id ex vel porro!</p>
                    <button className='px-4 py-2 text-lg border-[1px] border-slate-200 rounded-sm shadow-[0_0_15px_white]'>More Product`s</button>
                </div>
            </div>
            <div className='w-1/2 h-full flex items-center justify-center'>
                <Image src={'/intro-hero.jpg'} width={500} height={500} className='rounded-2xl shadow-[0_0_15px_#a302de]' />
            </div>
        </div>
    )
}

export default Hero