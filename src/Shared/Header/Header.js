import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';

export default function Header() {
  return (
    <div className='flex bg-black items-center p-3'>
        
        <div className='w-1/2 ml-3'>
            <a href="#"><img src={logo} alt="" srcset="" /></a>
            
        </div>
        <div className=' w-1/2'>
            <nav>
                <ul className='flex justify-between p-2 w-full'>
                    <Link to="/" className='no-underline'><li className= 'text-white p-2'>Home</li></Link>
                    <Link to="/shop" className='no-underline'><li className= 'text-white p-2'>Shop</li></Link>
                    <Link to="/orders" className='no-underline'><li className= 'text-white p-2'>Order</li></Link>
                    <Link to="/inventory" className='no-underline'><li className= 'text-white p-2'>Inventory</li></Link>
                    <Link to="/login" className='no-underline'><li className= 'text-white p-2'>Login</li></Link>
                </ul>
            </nav>
        </div>
    </div>
  )
}
