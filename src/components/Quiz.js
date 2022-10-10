import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Single from './Single';
const Quiz = () => {
    let quizes = useLoaderData()
    let all = quizes.data.questions;
    return (
        <div className='mt-5'>
            {
                all.map((single, idx) => <Single
                key={single.id}
                single={single}
                idx={idx}
                ></Single>)
            }
        </div>
    );
};

export default Quiz;