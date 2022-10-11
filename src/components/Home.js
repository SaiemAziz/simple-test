import React, {useContext} from 'react';
import { TopicContext } from '../layout/Main';
import Topic from './Topic/Topic';

const Home = () => {
    let topics = useContext(TopicContext);
    return (
        <div className=''>
            <div className='p-5 grid sm:grid-cols-2 gap-5 grid-cols-1 max-w-2xl mx-auto'>
                <div>
                    <img className=' mx-auto sm:mr-0 rounded-3xl' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=900&t=st=1665475887~exp=1665476487~hmac=f748a42c64ec22f0f57aff567b446468a9697f851fc767739eba83f44a579ec9" alt="" />
                </div>
                <div className='sm:text-left flex flex-col justify-around'>
                    <h1 className='text-3xl text-yellow-700 font-bold'>An easy test for you
                    <span><p className='italic text-xs text-gray-400'>Increase Your current skills</p></span>
                    </h1>
                    
                    <p className=' text-justify text-sm'>Hello, we hope you doing well. Welcome to simple test project where you can submit some of our quiz. It will show you how actually capable of below topics. Its easy to use, just click Start button and it will be started.</p>
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