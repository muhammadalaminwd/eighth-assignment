import React from 'react';
import './QuestionOne.css'
const QuestionOne = () => {
    return (
        <div>
            <h1 className='question'>Q1: How react Works?</h1>
            <p className='answer'>Ans: React is the most popular JavaScript library in the modern technology. Using react we can build single page application and mobile apps.<br></br>
            To show something in the app, react works in declarative code. Declarative code is lightweight, easier to understand. It creats componenets which is how we display information in fragmentation. There are 2 types of components 1. Functional components, 2. Class components. Components are made of two main ingredients: state and props. These makes react code structure like a tree. component tree allows us to create complex UIs. React works in unidirectional way. That means it can pass data from parent to child element.<br></br>
            React save developers time and helps to create awesome app. It doesn't need code much.
            </p>
        </div>
    );
};

export default QuestionOne;