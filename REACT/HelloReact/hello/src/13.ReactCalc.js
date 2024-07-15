import {useReducer} from 'react';

export default function ReactCalc(){

    const [result, dispatcher] = useReducer(reducer, 0);

    function plus() { dispatcher('plus');}
    function minus() { dispatcher('minus');}
    function multi() { dispatcher('multi');}
    function devide() { dispatcher('devide');}

    return(
        <div>
            <p>
                <input id='num1' type='text' />&nbsp;
                <input id='num2' type='text' />&nbsp;
                <button value='+' onClick={plus}>+</button>&nbsp;
                <button value='-' onClick={minus}>-</button>&nbsp;
                <button value='*' onClick={multi}>*</button>&nbsp;
                <button value='/' onClick={devide}>/</button>
                <span>결과 : {result}</span>
            </p>
        </div>

    );

}

function reducer(result, action){
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    switch(action){
        case 'plus':
            return num1 + num2;
            break;
        case 'minus':
            return num1 - num2;
            break;
        case 'multi':
            return num1 * num2;
            break;
        case 'devide':
            return num1 / num2 ;
    }
}