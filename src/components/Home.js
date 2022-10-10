import React, {useContext} from 'react';
import { TopicContext } from '../layout/Main';
import Topic from './Topic/Topic';

const Home = () => {
    let topics = useContext(TopicContext);
    return (
        <div className='mt-5'>
            <div></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 px-5'>
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