import React from 'react';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignUp from './pages/sign-up/sign-up.component';
import Schools from './pages/schools/schools.component';
import SignIn from './pages/sign-in/sign-in.component';
import Profile from './pages/profile/profile.component';

import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser, currentUser} = this.props; 


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
              ...snapShot.data()
          })
        })
      } 

      setCurrentUser(userAuth);
    })
    console.log(currentUser);
  }

  
  componentWillUnmount(){
      this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/schools' component={Schools} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/sign-in' render={() => this.props.currentUser ? (
              <Redirect to='/profile' /> 
          )
            : (
              <SignIn />
            )
          } 
          />
          <Route exact path='/sign-up' render={() => this.props.currentUser ? (
              <Redirect to='/profile' /> 
          )
            : (
              <SignUp />
            )
          } 
          />
          <Route exact path='/profile' render={() => this.props.currentUser ? (
            <Profile />
          )
            : (
              <Redirect to='/' /> 
            )
          } 
          />
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
