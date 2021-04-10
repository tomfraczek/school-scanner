import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import schoolReducer from './school/school.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    school: schoolReducer
}) 

export default persistReducer(persistConfig, rootReducer);