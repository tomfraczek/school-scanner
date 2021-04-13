import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCurrentUserSchools } from '../../redux/school/school.selectors';

import SchoolCard from '../school-card/school-card.component';

import './profile-overview.styles.scss';

class ProfileOverview extends React.Component {


    render(){
        const {currentUser, userSchools} = this.props;

        return(
            <div className="profile-overview">
                <h1>{currentUser.displayName}</h1>
                <p>{currentUser.email}</p>

                <div className="schools">
                {
                    userSchools ?  
                    userSchools.map(school =>
                        <SchoolCard key={school.id} school={school} />
                    )
                    : null
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentUser: selectCurrentUser(state),
    userSchools: selectCurrentUserSchools(state.user.currentUser.id)(state)
})

export default connect(mapStateToProps)(ProfileOverview);