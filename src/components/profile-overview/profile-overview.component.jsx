import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './profile-overview.styles.scss';

const ProfileOverview = ({currentUser}) => (
    <div className="profile-overview">
        <h1>{currentUser.displayName}</h1>
        <p>{currentUser.email}</p>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(ProfileOverview);