import React from 'react';

const Question = () => {
    return (
        <div className='max-w-6xl mx-auto px-6 md:px-4 py-10'>
            <h2 className='font-bold text-3xl text-center mb-10'>Questions & Answers</h2>

            <div className="mb-5">
                <h4 className="text-xl font-bold mb-1">
                    1. When should you use context API?
                </h4>
                <p className=''>
                    - When you have deeply nested components, and passing down props through each layer of the component tree becomes tedious and you have data or functions that need to be accessed by multiple components at different levels of the component tree, and passing them down as props.
                </p>
            </div>
            <div className="mb-5">
                <h4 className="text-xl font-bold mb-1">
                    2. What is a custom hook?
                </h4>
                <p className=''>
                    - To create a custom hook, you simply write a function that uses built-in hooks like useState or useEffect and returns an object or value that can be used by the component.
                </p>
            </div>

            <div className="mb-5">
                <h4 className="text-xl font-bold mb-1">
                    3. What is useRef?
                </h4>
                <p className=''>
                    - useRef is a hook in React that provides a way to create and maintain a reference to an element in the DOM or a value that persists across renders without triggering a re-render.
                </p>
            </div>

            <div className="mb-5">
                <h4 className="text-xl font-bold mb-1">
                    4. What is useMemo?
                </h4>
                <p className=''>
                    - useMemo is a hook that is used to memoize the result of a function call and only recompute the result when one of the dependencies has changed. The main purpose of useMemo is to optimize the performance of expensive computations that are done in a component.
                </p>
            </div>

        </div>
    );
};

export default Question;