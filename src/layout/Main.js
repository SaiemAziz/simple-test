import React from 'react';
import Nav from '../components/Nav';
import {Outlet} from 'react-router-dom'
const Main = () => {
    return (
        <div className='bg-slate-800'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;