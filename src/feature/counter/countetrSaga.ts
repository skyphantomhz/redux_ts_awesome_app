import {
    put,
    takeEvery,
    delay,
    takeLatest,
    call
} from "redux-saga/effects"
import {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store'
import {increaseAsync, incrementAsyncSuccess} from './counterSlice'

export default function* counterSaga () {
    console.log("counterSaga");
    yield takeEvery(increaseAsync.type, asyncIncreaseSaga)
}

function* asyncIncreaseSaga (action : PayloadAction < number >) {
    const x: number = yield
    call(callApiDemo, 1000)
    console.log("counterSaga: take last " + x);
    console.log(action);
    yield put(incrementAsyncSuccess(action.payload))
}

const callApiDemo = (ms : number) => new Promise(res => setTimeout(() => {
    res(3)
}, ms))
