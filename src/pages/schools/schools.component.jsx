import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
 
import './schools.styles.scss';

import { selectSchools } from '../../redux/school/school.selectors';
import { updateSchools } from '../../redux/school/school.actions';

import { firestore } from '../../firebase/firebase.utils';
import { convertSchoolsSnapschotToMap } from '../../firebase/firebase.utils';

import SchoolCard from '../../components/school-card/school-card.component'

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
    const {schools} = this.props;

        return(
            <div className="schools">
                {
                    schools ? schools.map((school, index) => (
                            <SchoolCard key={index} school={school} />
                    )) : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateSchools: schoolsMap => dispatch(updateSchools(schoolsMap))
})

const mapStateToProps = createStructuredSelector({
    schools: selectSchools
})

export default connect(mapStateToProps, mapDispatchToProps)(Schools);