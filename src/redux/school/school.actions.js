import SchoolActionTypes from './school.types';

export const updateSchools = (schoolsMap) => ({
    type: SchoolActionTypes.UPDATE_SCHOOLS,
    payload: schoolsMap
})