import React from 'react';
import { withRouter } from 'react-router-dom'

import { createSchoolProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

class SchoolAdd extends React.Component {
    constructor(){
        super();

        this.state = {
            author:{
                name: '',
                id: ''
            },
            name: '',
            shorthand: '',
            teacher: '',
            country: '',
            city: '',
            logo_url: '',
            id: '',
        }
    }

    componentDidMount(){
        const {currentUser} = this.props;
        if (currentUser){
            this.setState({
                author:{
                    name: currentUser.displayName,
                    id: currentUser.id
                }
            })
        }
    }

    handleSubmit = async (event, history) => {
        event.preventDefault();
        const {name, shorthand, teacher, country, city, training_days, logo_url} = this.state;
        
        try{
        
            //creates a new school document in firebase
            await createSchoolProfileDocument('schools', this.state);


            //clear the form
            this.setState({
                name: '',
                shorthand: '',
                teacher: '',
                country: '',
                city: '',
                training_days: [],
                logo_url: '',
            })

            //redirect to homepage
            history.push('/');

        }catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        const {name, shorthand, teacher, country, city, training_days, logo_url} = this.state;

        return(
            <div className="profile-edit">
                add school
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        label='Name'
                        required
                    />

                    <FormInput
                        type='text'
                        name='shorthand'
                        value={shorthand}
                        onChange={this.handleChange}
                        label='Shorthand'
                        required
                    />

                    <FormInput
                        type='text'
                        name='teacher'
                        value={teacher}
                        onChange={this.handleChange}
                        label='Teacher'
                        required
                    />

                    <FormInput
                        type='text'
                        name='country'
                        value={country}
                        onChange={this.handleChange}
                        label='Country'
                        required
                    />

                    <FormInput
                        type='text'
                        name='city'
                        value={city}
                        onChange={this.handleChange}
                        label='City'
                        required
                    />

                    <FormInput
                        type='text'
                        name='logo_url'
                        value={logo_url}
                        onChange={this.handleChange}
                        label='Logo URL'
                        required
                    />

                    <CustomButton type='submit'>Add School</CustomButton>
                </form>
            </div>
        )
    }
}

export default withRouter(SchoolAdd);