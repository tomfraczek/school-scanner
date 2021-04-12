import React from 'react';

import './schools-overview.styles.scss';

import { connect } from 'react-redux';
import { selectSchoolsForOverview } from '../../redux/school/school.selectors';

import { createStructuredSelector } from 'reselect';

import SchoolCard from '../../components/school-card/school-card.component';


const SchoolsOverview = ({schools}) => (
    <div className="schools-overview">
        {
            schools ? schools.map((school, index) => (
                    <SchoolCard key={index} school={school} />
            )) : null
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    schools: selectSchoolsForOverview
})

export default connect(mapStateToProps)(SchoolsOverview);