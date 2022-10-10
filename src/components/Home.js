import React, {useContext} from 'react';
import { TopicContext } from '../layout/Main';
import Topic from './Topic/Topic';

const Home = () => {
    let topics = useContext(TopicContext);
    return (
        <div className='mt-5'>
            <div className='p-4 grid sm:grid-cols-2 gap-5 grid-cols-1'>
                <div>
                    <img src="../sayem.jpg" alt="" />
                </div>
                <div className='sm:text-left'>
                    <h1 className='text-3xl text-yellow-700'>Sayem Aziz Chowdhury</h1>
                    <p className='italic'>University of Chittagong</p>
                </div>
            </div>
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