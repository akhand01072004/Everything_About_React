import React from 'react'
import '../App.css'
import { useState } from 'react'
const ColorChange = () => {
    let [bgcolor, setbgcolor] = useState("bg-black")
    return (
        <>
            <div className={`h-screen w-full ${bgcolor} flex flex-col justify-between`}>
                <div className="h-36 w-full  p-4">Border Width</div>
                <div className="h-36  p-4 m-4 flex justify-center items-center">
                    <div className="bg-white w-4/5  flex flex-wrap gap-2 justify-center items-center d-h">
                        <button  className="bt bg-red-500 text-white rounded " onClick={()=>{setbgcolor('bg-red-500')}}>Red</button >
                        <button  className="bt bg-blue-500 text-white rounded" onClick={()=>{setbgcolor('bg-blue-500')}}>Blue</button >
                        <button  className="bt bg-green-500 text-white rounded" onClick={()=>{setbgcolor('bg-green-500')}}>Green</button >
                        <button  className="bt bg-yellow-500 text-black rounded" onClick={()=>{setbgcolor('bg-yellow-500')}}>Yellow</button >
                        <button  className="bt bg-purple-500 text-white rounded" onClick={()=>{setbgcolor('bg-purple-500')}}>Purple</button >
                        <button  className="bt bg-pink-500 text-white rounded" onClick={()=>{setbgcolor('bg-pink-500')}}>Pink</button >
                        <button  className="bt bg-indigo-500 text-white rounded" onClick={()=>{setbgcolor('bg-indigo-500')}}>Indigo</button >
                        <button  className="bt bg-teal-500 text-white rounded" onClick={()=>{setbgcolor('bg-teal-500')}}>Teal</button >
                        <button  className="bt bg-orange-500 text-white rounded" onClick={()=>{setbgcolor('bg-orange-500')}}>Orange</button >
                        <button  className="bt bg-gray-500 text-white rounded" onClick={()=>{setbgcolor('bg-gray-500')}}>Gray</button >
                        <button  className="bt bg-black text-white rounded" onClick={()=>{setbgcolor('bg-black')}}>Black</button >
                    </div>
                </div>

            </div>
        </>
    )
}

export default ColorChange