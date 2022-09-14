import { all } from 'redux-saga/effects';

import interestSaga from './interestSaga';

export default function* rootSaga() {
    yield all([interestSaga()]);
}
