import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Opt = ({option, idx, ans})=> {
    let id = String.fromCharCode(idx+97)
    let check = (option) => {
        if(ans === option)
        toast.success('Correct answer', {
            position: "top-center",
            autoClose: 3000,
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
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }


    return (
        <div
        onClick={()=>check(option)}
        className='italic hover:bg-red-500 px-5 cursor-pointer hover:scale-105 duration-150'>
            <p>{id}. {option}</p>
        </div>
    )
}


const Single = ({single, idx}) => {
    let {question, options, correctAnswer} = single
    question = question.slice(3,question.length-4).replace('&nbsp;'," ");
    let ans = correctAnswer;
    return (
        <div className='overflow-hidden bg-red-800 rounded-xl mb-2 p-4 max-w-2xl mx-auto text-white text-left'>
            <h1 className='text-xl mb-2 font-bold'
                >{idx+1}. {question} 
                <span></span>
            </h1>
            {
                options.map((option,idx)=> <Opt
                    key={idx}
                    option={option}
                    idx={idx}
                    ans={ans}
                ></Opt>)
            }      

            <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />
        </div>
    );
};

export default Single;