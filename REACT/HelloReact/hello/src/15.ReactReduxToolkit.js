// redux toolkit
// npm install @reduxjs/toolkit react-redux
// redux의 사용 편의를 위해서 고안 

import {configureStore, createSlice} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
});

const {increment, decrement} = counterSlice.actions;

const store = configureStore({
    reducer:{
        counter : counterReducer
    }
});

export default function ReactReduxToolkit(){
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter);
    const handleIncrement = () => {dispatch(increment())};
    const handleDecrement = () => {dispatch(decrement())};
    return(
        <div>
            <button onClick={handleIncrement}>증가</button>&nbsp;
            <span>{count}</span>&nbsp;
            <button onClick={handleDecrement}>감소</button>&nbsp;
        </div>
    );
}