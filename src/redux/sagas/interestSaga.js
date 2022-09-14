import { put, call, takeLatest } from 'redux-saga/effects';

import { setError, setInterestRate} from '../actions';
import { INTEREST_RATE } from '../constants';
import { fetchInterestData } from '../api/productsApi';

export function* handleGetInterestRate(data) {
    try {
        const interestData = yield call(fetchInterestData, data.data);
        yield put(setInterestRate(interestData));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchLoadProducts() {
    yield takeLatest(INTEREST_RATE.GET, handleGetInterestRate);
}
