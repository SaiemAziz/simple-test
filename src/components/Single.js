import React from 'react';

const Opt = ({option, idx, ans, check})=> {
    let id = String.fromCharCode(idx+97)


    return (
        <div
        onClick={()=>check(option, ans)}
        className='text-center italic hover:bg-red-600 hover:py-2 px-5 cursor-pointer hover:scale-110 duration-300 text-sm'>
            <p><span className='font-bold text-amber-300'>{id}</span>. {option}</p>
        </div>
    )
}


const Single = ({single, idx, check, show}) => {
    let {question, options, correctAnswer} = single
    question = question.slice(3,question.length-4).replace('&nbsp;'," ");
    let ans = correctAnswer;
    return (
        <div className='overflow-hidden bg-red-800 rounded-xl mb-2 p-4 max-w-2xl mx-auto text-white text-left'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl mb-2 font-bold w-11/12'
                    ><span className='text-blue-300'
                    >{idx+1}</span>. {question} 
                </h1>
                <i className="hover:text-2xl duration-150 cursor-pointer fa-regular fa-eye text-green-300"
                onClick={()=> show(ans)}
                ></i>
            </div>
            {
                options.map((option,idx)=> <Opt
                    key={idx}
                    option={option}
                    idx={idx}
                    ans={ans}
                    check={check}
                ></Opt>)
            }      

            
        </div>
    );
};

export default Single;