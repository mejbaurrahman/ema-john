import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../../images/coverPhoto.jpg';

export default function Home() {
  return (
    <div className='md:flex justify-center items-center mt-16'>
        <div className='md:w-1/2 w-full pl-28'>
            <h6 className='text-2xl font-medium text-amber-400'>Sale up to 70% off</h6>
            <h1 className='text-5xl font-semibold'>New Collection For Fall</h1>
            <p className='text-2xl font-thin'>Discover all new arrival of ready to wear</p>
            <Link to='/shop'><button className='mt-3 px-4 py-2 bg-orange-400 rounded'>Shop Now</button></Link>
        </div>
        <div className='md:w-1/2 w-full px-3'>
            <img src={cover} alt="" className='w-3/4' />
        </div>
    </div>
  )
}
