import React from 'react';

const Opt = ({option, idx, ans})=> {
    let id = String.fromCharCode(idx+97)
    let check = (option) => {
        if(ans === option)
            console.log(true);
        else
            console.log(false);
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
    question = question.slice(3,question.length-4);
    let ans = correctAnswer;
    return (
        <div className='overflow-hidden bg-red-800 rounded-xl mb-2 p-2 max-w-2xl mx-auto text-white text-left'>
            <h1 className='text-xl mb-2'>{idx+1}. {question}</h1>
            {
                options.map((option,idx)=> <Opt
                    key={idx}
                    option={option}
                    idx={idx}
                    ans={ans}
                ></Opt>)
            }        
        </div>
    );
};

export default Single;