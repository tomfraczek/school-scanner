import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.scss';

const Header = ({currentUser, history}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <h1>School-Scanner</h1>
        </Link>

        <div className="options">
            {
                currentUser ? 
                <div className="logged-in-options">
                    <Link className='option' to='/schools'>Find School</Link>
                    <Link className='option' to='/profile'>Profile</Link>
                    <div className='option' onClick={() => {
                        auth.signOut();
                        history.push('/');
                    }}>Sign Out</div>
                </div>
                : 
                <div className='login-buttons'> 
                    <Link className='option' to='/sign-in'>Sign In</Link>
                    <Link className='option' to='/sign-up'>Sign Up</Link>
                </div>
            }
            
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default withRouter(connect(mapStateToProps)(Header));