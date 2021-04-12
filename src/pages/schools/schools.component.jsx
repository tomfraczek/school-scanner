import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
 
import './schools.styles.scss';

import { updateSchools } from '../../redux/school/school.actions';

import { firestore } from '../../firebase/firebase.utils';
import { convertSchoolsSnapschotToMap } from '../../firebase/firebase.utils';

import SchoolsOverview from '../../components/schools-overview/schools-overview.component';
import SchoolPage from '../school/school.component'


class Schools extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateSchools} = this.props;
        const schoolRef = firestore.collection('schools');

        schoolRef.onSnapshot(async snapshot => {
            const schoolsMap = convertSchoolsSnapschotToMap(snapshot);
            updateSchools(schoolsMap);
        })
    }


    render(){
        const {match} = this.props;
        return(
            <div className="schools">
                <Route exact path={`${match.path}`} component={SchoolsOverview} />
                <Route path={`${match.path}/:schoolId`} component={SchoolPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateSchools: schoolsMap => dispatch(updateSchools(schoolsMap))
})



export default withRouter(connect(null, mapDispatchToProps)(Schools));