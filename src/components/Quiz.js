import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Single from './Single';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    let quizes = useLoaderData()
    let all = quizes.data.questions;
    let title = quizes.data.name;
    let total = quizes.data.total;
    let check = (option, ans) => {
        if(ans === option)
        toast.success('Correct answer', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        else
        toast.error('Wrong answer', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    let show = (ans) => {
        toast.info(`${ans}`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    return (
        <div className='mt-5 mx-2'>
            <h1 className='text-3xl font-bold text-red-700 mt-5'>{title}</h1>
            <h1 className='text-xl font-bold text-red-700 mb-5'>Total: {total} questions</h1>
            {
                all.map((single, idx) => <Single
                key={single.id}
                single={single}
                idx={idx}
                check={check}
                show={show}
                ></Single>)
            }
            <ToastContainer/>
        </div>
    );
};

export default Quiz;