import React from 'react'
import { Link } from "react-router-dom";


const Todos = ({title, description, isComplete, id}) => {
  return (
    <Link to={`/todo/${id}`}>
        <div className='border mb-5 p-5'>
            <h1 className='font-bold'>{title}</h1>
        </div>
    </Link>
  )
}

export default Todos