import React from 'react'

const navbar = () => {
  return (
<div>
      <nav className="flex justify-around bg-gray-400 items-center py-4">
        <div>
            <h1 className="text-2*1 font-extrabold  italic text-red-500">logo</h1>
        </div>
        <div>
            <ul className="flex gap-9 text-2*1 font-bold text-amber-500">
                <li className="hover:underline hover:cursor-pointer">home</li>
                <li className="hover:underline hover:cursor-pointer">about</li>
            </ul>
        </div>
        <div className="flex gap-3">
            <input type="text"className="font-bold text-amber-500 border"/>
            <button>search</button>
        
        </div>
      </nav>
      </div>
    
  )
}

export default navbar
