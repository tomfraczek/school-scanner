import { createSelector } from 'reselect';

const selectSchool = state => state.school;

export const selectSchoolsForOverview = createSelector(
    [selectSchool],
    school => school.schools ? school.schools.sort((a, b) => a.created_at - b.created_at) : []
)

export const selectSingleSchool = schoolUrlParam =>
createSelector(
    [selectSchool],
    school => school ? school.schools.find(school => school.id === schoolUrlParam) : []
)

export const selectCurrentUserSchools = userId =>
createSelector(
    [selectSchool],
    school => school ? school.schools.filter(school => school.author.id === userId) : []
)