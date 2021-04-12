import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import SignIn from '../../pages/sign-in/sign-in.component';

const Homepage = () => (
    <div className="homepage">

        <div className="intro">
            <h1>School-Scanner</h1>
            <p>School-Scanner helps you connect with schools</p>
        </div>

        <div className="sign-in">
            <SignIn />
            <Link to='/sign-up'>Create a new account</Link>
        </div>
    </div>
)

export default Homepage;