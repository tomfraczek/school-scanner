import React from 'react';
import { Route, Link } from 'react-router-dom';

import ProfileOverview from '../../components/profile-overview/profile-overview.component';
import ProfileEdit from '../../components/profile-edit/profile-edit.component';
import SchoolAdd from '../../components/school-add/school-add.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './profile.styles.scss';

class Profile extends React.Component{
    render(){
        const {match, currentUser} = this.props;
        return(
            <div className="profile">
                <Link to={`${match.path}/add-school`}>Click</Link>
                <div className="tomeczek">
                <Route exact path={`${match.path}`} component={ProfileOverview} />
                </div>
                <Route path={`${match.path}/edit`} component={ProfileEdit} />
                <Route path={`${match.path}/add-school`} render={routeProps => (
                    <SchoolAdd currentUser={currentUser} />
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(Profile);