import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import schoolReducer from './school/school.reducer';
import userSchoolsReducer from './school/school.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'school']
}

const rootReducer = combineReducers({
    user: userReducer,
    school: schoolReducer,
    userSchools: userSchoolsReducer
}) 

export default persistReducer(persistConfig, rootReducer);