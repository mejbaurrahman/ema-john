import React from 'react';
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
                    <a href="#" className='no-underline'><li className= 'text-white p-2'>Home</li></a>
                    <a href="#" className='no-underline'><li className= 'text-white p-2'>Shop</li></a>
                    <a href="#" className='no-underline'><li className= 'text-white p-2'>Order</li></a>
                    <a href="#" className='no-underline'><li className= 'text-white p-2'>Inventory</li></a>
                    <a href="#" className='no-underline'><li className= 'text-white p-2'>Login</li></a>
                </ul>
            </nav>
        </div>
    </div>
  )
}
