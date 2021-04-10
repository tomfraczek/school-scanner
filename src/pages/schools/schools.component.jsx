import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
 
import './schools.styles.scss';

import {selectSchools} from '../../redux/school/school.selectors';

import SchoolCard from '../../components/school-card/school-card.component'

const Schools = ({schools}) => (
    <div className="schools">
        {
            schools.map((school, index) => (
                    <SchoolCard key={index} school={school} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    schools: selectSchools
})

export default connect(mapStateToProps)(Schools);