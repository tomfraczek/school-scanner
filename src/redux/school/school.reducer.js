import schoolsComponent from '../../pages/schools/schools.component';
import SchoolActionTypes from './school.types';

const INITIAL_STATE = {
    schools: null
};

const schoolReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SchoolActionTypes.UPDATE_SCHOOLS:
            return {
                ...state,
                schools: action.payload
            }
        case SchoolActionTypes.GET_USER_SCHOOLS:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default schoolReducer;