import {INTEREST_RATE} from "../constants";

const getInterestRate = data => ({
    type: INTEREST_RATE.GET,
    data
});

const setInterestRate = interestData => ({
    type: INTEREST_RATE.GET_SUCCESS,
    interestData
});

const setError = error => ({
    type: INTEREST_RATE.GET_FAIL,
    error
});

export {
    setError,
    setInterestRate,
    getInterestRate
};
