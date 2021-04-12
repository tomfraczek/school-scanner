import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectSchoolsForOverview } from '../../redux/school/school.selectors';

import SchoolCard from '../school-card/school-card.component';

import './profile-overview.styles.scss';

class ProfileOverview extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userSchools: []
        }
    }


    componentDidMount(){
        const {currentUser, school} = this.props;
        const userSchools = school.filter(school => school.author.id === currentUser.id)
        this.setState({
            userSchools: userSchools
        })
    }

    render(){
        const {currentUser} = this.props;

        return(
            <div className="profile-overview">
                <h1>{currentUser.displayName}</h1>
                <p>{currentUser.email}</p>

                <div className="schools">
                {
                    this.state.userSchools ?  
                    this.state.userSchools.map(school =>
                        <SchoolCard school={school} />
                    )
                    : null
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    school: selectSchoolsForOverview
})

export default connect(mapStateToProps)(ProfileOverview);