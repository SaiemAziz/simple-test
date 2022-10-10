import React, {createContext} from 'react';
import Nav from '../components/Nav';
import {Outlet, useLoaderData} from 'react-router-dom'

export const TopicContext = createContext([])
const Main = () => {
    let x = useLoaderData();
    return (
        <TopicContext.Provider value={x.data}>
            <div className='max-w-5xl mx-auto'>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        </TopicContext.Provider>
    );
};

export default Main;