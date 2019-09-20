import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>
ReactDOM.render(element, document.getElementById('root'));

// LEARNING JAVASCRIPT!!!!

// const -> block
// let -> block
// var -> function



const person = {
    name: 'Kennet',
    walk() {},
    talk() {},
}
person.talk();
person.name = '';

// would work for input field
const targetMember = 'name';
person[targetMember.value] = 'Robert';


const person2 = {
    name: 'Kennet',
    walk() {
    // (this) returns always return a reference to the current object
        console.log(this);
    }
};

person2.walk();

const walk = person2.walk;
walk();
