import React, {useContext} from 'react';
import { TopicContext } from '../layout/Main';
import Topic from './Topic/Topic';

const Home = () => {
    let topics = useContext(TopicContext);
    return (
        <div className='mt-5'>
            <div className='p-5 grid sm:grid-cols-2 gap-5 grid-cols-1'>
                <div>
                    <img className=' mx-auto sm:mr-0 rounded-3xl' src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/155485640_1145998085822360_3925473345700600028_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_ohc=meyReen1TuQAX90ady8&_nc_ht=scontent.fcgp7-1.fna&oh=00_AT_H3OLYTnNVxECcFPyjKnCfvD56R8HWpUj_b7jwZ-QB6g&oe=63699C59" alt="" />
                </div>
                <div className='sm:text-left flex flex-col justify-around'>
                    <h1 className='text-3xl text-yellow-700 font-bold'>Sayem Aziz Chowdhury
                    <span><p className='italic text-xs text-gray-400'>University of Chittagong</p></span>
                    </h1>
                    
                    <p className='text-xl text-justify'>Hello, I am a junior web developer who loves to play games beside education. I also like to eat foods. I watch web series and anime often when i have leisure time.</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold my-5 text-green-600'>Give a Test from below</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 mb-5'>
            {
                topics.map(topic => <Topic 
                    key={topic.id} 
                    topic={topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;