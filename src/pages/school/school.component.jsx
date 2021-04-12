import React from 'react';

import './school.styles.scss';

import { connect } from 'react-redux';
import { selectSingleSchool } from '../../redux/school/school.selectors';

import SchoolCard from '../../components/school-card/school-card.component'
import CustomButton from '../../components/custom-button/custom-button.component'


const SchoolPage = ({school}) => (
    <div className="school-page">
        <div className="school-details">
            <div className="school-info">
                <div className="school-cta">
                    <SchoolCard school={school}/>
                    <div className="cta">
                        <CustomButton inverted>Save to Favorites</CustomButton>
                        <CustomButton inverted>Contact School</CustomButton>
                        <CustomButton inverted>Write a review</CustomButton>
                        <CustomButton inverted>Report School</CustomButton>
                    </div>
                </div>

                <div className="school-description">
                    <h3>About {school.name}</h3>
                    <p>{school.description}</p>
                </div>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    school: selectSingleSchool(ownProps.match.params.schoolId)(state)
})

export default connect(mapStateToProps)(SchoolPage);