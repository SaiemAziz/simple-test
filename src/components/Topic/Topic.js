import React from 'react';
import {Link} from 'react-router-dom'

const Topic = ({topic}) => {
    return (
        <div className='bg-yellow-800 rounded-xl text-white overflow-hidden'>
            <img className='p-5' src={topic.logo} alt="" />
            <h1 className='text-2xl my-5'>{topic.name}</h1>
            <Link to={`topic/${topic.id}`}>
                <button 
                className='w-full bg-yellow-400 sm:hover:scale-125 text-yellow-900 py-3 font-bold duration-200'
                >Start</button>
            </Link>
        </div>
    );
};

export default Topic;