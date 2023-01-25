import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/reducer';

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
})

export default rootReducer;