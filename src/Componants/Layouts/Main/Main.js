import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../../src/Shared/Header/Header';

export default function Main() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
