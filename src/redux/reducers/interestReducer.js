import { INTEREST_RATE } from '../constants';

const interestReducer = (state = {
    "interestRate": 0.27,
    "monthlyPayment": {
        "amount": 189,
        "currency": "USD"
    },
    "numPayments": 6,
    "principal": {
        "amount": 1000,
        "currency": "USD"
    }
}, {type, interestData}) => {
    if (type === INTEREST_RATE.GET_SUCCESS) {
        return {...interestData};
    }
    return state;
};

export default interestReducer;
