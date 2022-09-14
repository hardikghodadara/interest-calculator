import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import interestReducer from './interestReducer';

const rootReducer = () =>
  combineReducers({
    isLoading: loadingReducer,
    interestData: interestReducer,
    error: errorReducer,
  });

export default rootReducer;
