import React from 'react';
import {Link} from 'react-router-dom'

const Topic = ({topic}) => {
    return (
        <div className='bg-yellow-800 rounded-xl text-white overflow-hidden shadow-2xl'>
            <img className='p-5 pb-2 mx-auto w-full' src={topic.logo} alt="" />
            <h1 className='text-xl italic font-medium mb-2 '><span className='block text-sm font-bold not-italic text-amber-600'>{topic.total} questions</span> {topic.name} </h1>
            
            <Link to={`topic/${topic.id}`}>
                <button 
                className='w-full hover:bg-yellow-400 sm:hover:scale-125 hover:text-yellow-900 py-3 font-bold duration-200 bg-yellow-600 text-yellow-300'
                >Start <i className="fa-solid fa-arrow-right ml-1 text-xs"></i></button>
            </Link>
        </div>
    );
};

export default Topic;