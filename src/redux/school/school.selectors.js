import { createSelector } from 'reselect';

const selectSchool = state => state.school;


export const selectSchools = createSelector(
    [selectSchool],
    school => school ? school.schools : []
)