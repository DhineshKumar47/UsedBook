import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()
    const handleClick = () => {
        navigate("/books")
    }
  return (
    <div style={{color:"white"}} >
        <button onClick={handleClick}>click me</button>
    </div>
  )
}
