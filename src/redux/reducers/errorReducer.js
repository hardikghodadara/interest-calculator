import { INTEREST_RATE } from "../constants";

const errorReducer = (state = null, {type, error}) => {
    switch (type) {
        case INTEREST_RATE.GET_FAIL:
            return error;

        case INTEREST_RATE.GET:
        case INTEREST_RATE.GET_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
