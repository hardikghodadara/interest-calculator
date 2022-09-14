import { INTEREST_RATE } from '../constants';

const loadingReducer = (state = false, {type}) => {
    switch (type) {
        case INTEREST_RATE.GET:
            return true;

        case INTEREST_RATE.GET_SUCCESS:
        case INTEREST_RATE.GET_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;
