import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class ProfileEdit extends React.Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         name: '',
    //         shorthand: '',
    //         teacher: '',
    //         country: '',
    //         city: '',
    //         training_days: [],
    //         logo_url: '',
    //     }
    // }

    // handleSubmit = async event => {
    //     event.preventDefault();

    //     const {displayName, email, password, confirmPassword} = this.state;
        
    //     try{
    //         // const {user} = await auth.createUserWithEmailAndPassword(email, password);

    //         // await createUserProfileDocument(user, {displayName});

    //         this.setState({
    //             name: '',
    //             shorthand: '',
    //             teacher: '',
    //             country: '',
    //             city: '',
    //             training_days: [],
    //             logo_url: '',
    //         })

    //     }catch (error) {
    //         console.error(error)
    //     }
    // }

    // handleChange = event => {
    //     const {name, value} = event.target;

    //     this.setState({[name]: value});
    // }

    render(){
        // const {name, shorthand, teacher, country, city, training_days, logo_url} = this.state;

        return(
            <div className="profile-edit">
                profile edit
                {/* <form className='sign-up-form' onSubmit={this.handleSubmit}>
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
                        name='training_days'
                        value={training_days}
                        onChange={this.handleChange}
                        label='Training days'
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

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form> */}
            </div>
        )
    }
}

export default ProfileEdit;