import React from 'react'
import { useRouteError,NavLink } from 'react-router-dom'

const Error = () => {

    const error=useRouteError();
    console.log(error)
  return (
    <div>
        
        {
            error &&  <p> {error.data}</p>
        }

        <NavLink  to='/'>

        <button className='m-2 p-2 border-2'>GO home</button>
        </NavLink>
    </div>
  )
}

export default Error