import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {

    const error = useRouteError();
  return (
    <div className='text-3xl text-center my-auto'>
        <h1>Not Found : 404</h1>
        <h1>{error}</h1>
    </div>
  )
}
