import { combineReducers } from 'redux';
import counterReducer from "./counter";

const allReducers = combineReducers({
    counterReducer,
    // Thêm nhiều reducers ở đây

});

export default allReducers;