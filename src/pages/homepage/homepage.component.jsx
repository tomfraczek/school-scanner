import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector'

import './homepage.styles.scss';

import SignIn from '../../pages/sign-in/sign-in.component';

const Homepage = ({currentUser}) => (
    <div className="homepage">

        <div className="intro">
            <h1>School-Scanner</h1>
            <p>School-Scanner helps you connect with schools</p>
        </div>

        <div className="sign-in">
            {
                currentUser ? null : <SignIn />
            }
            
            
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Homepage);