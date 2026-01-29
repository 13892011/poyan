import Image from "next/image"
import React from "react"

function Fun() {
    return (
        <div className='w-full  flex  items-center justify-center bg-linear-to-l from-black via-indigo-950 to-indigo-800'>

            <div className='w-[400px] h-[600px]'>
            </div>
            <div className='w-[400] h-[400] rounded-lg shadow-[0_0_15px_#edd5f7] mr-55'><Image src={'/99-01-c32-563.jpg'} width={450} height={200} />
            <p className="text-slate-100 text-2xl ml-4 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus tempore possimus ab consectetur perferendis illum quaerat porro!</p>
            </div>
            <div className="w-[400] h-[400] rounded-lg shadow-[0_0_15px_#edd5f7] mr-55 "><Image src={'/99-01-c32-563.jpg'} width={450} height={200} />
            <p className="text-slate-100 text-2xl ml-4 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sint <samp className="text-">maiores</samp> molestias quaerat?</p>
            <button className="w-[200px] h-[100] taxt-slate-100"></button>
            </div>
            <div className="w-[400] h-[400] rounded-lg shadow-[0_0_15px_#edd5f7] mr-55" ><Image src={'/99-01-c32-563.jpg'} width={450} height={200} />
            <p className="text-slate-100 text-2xl ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas nulla <br /> ipsum aliquid modi dolores voluptate ex sed.</p>
            </div>
             
        </div>
    )
}

export default Fun