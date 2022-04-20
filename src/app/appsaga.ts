import { PayloadAction } from '@reduxjs/toolkit';
import {all, takeEvery, take} from 'redux-saga/effects'
import counterSaga from '../feature/counter/countetrSaga'
import {increment} from '../feature/counter/counterSlice'

export default function* rootSaga() {
    console.log("Log root saga");
    yield all([helloSaga(), counterSaga()])
}

function* takeSaga(){
    console.log("Hello takeSaga");
}

function* helloSaga(){
    console.log("Hello saga!");
    yield takeEvery(increment().type, log)
}

export function * log(action: PayloadAction){
    console.log(action)
}