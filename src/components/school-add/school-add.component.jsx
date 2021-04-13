import React from 'react';
import { withRouter } from 'react-router-dom'

import { createSchoolProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import './school-add.styles.scss';

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
            description: '',
            published: false,
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
                description: '',
                published: false,
            })

            //redirect to homepage
            history.push('/');

        }catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const target = event.target;
        const {name, value} = target;

        // console.log(name, value)

        this.setState(target.type === 'checkbox' ? {[name]: !this.state.published} : {[name]: value});
    }

    render(){
        const {name, shorthand, teacher, country, city, description, logo_url, published} = this.state;

        return(
            <div className="profile-edit">
                add school
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        placeholder='Name'
                        required
                    />

                    <FormInput
                        type='text'
                        name='shorthand'
                        value={shorthand}
                        onChange={this.handleChange}
                        placeholder='Shorthand'
                        required
                    />

                    <FormInput
                        type='text'
                        name='teacher'
                        value={teacher}
                        onChange={this.handleChange}
                        placeholder='Teacher'
                        required
                    />

                    <FormInput
                        type='text'
                        name='country'
                        value={country}
                        onChange={this.handleChange}
                        placeholder='Country'
                        required
                    />

                    <FormInput
                        type='text'
                        name='city'
                        value={city}
                        onChange={this.handleChange}
                        placeholder='City'
                        required
                    />

                    <FormInput
                        type='text'
                        name='logo_url'
                        value={logo_url}
                        onChange={this.handleChange}
                        placeholder='Logo URL'
                        required
                    />

                    <textarea
                        className='description-field'
                        name='description'
                        value={description}
                        onChange={this.handleChange}
                        placeholder='Description'
                        required
                    >

                    </textarea>

                    <div className="published-container">
                    <span>Published </span>
                    <FormInput
                        type='checkbox'
                        name='published'
                        value={published}
                        onChange={this.handleChange}
                    />
                    </div>

                    <CustomButton type='submit'>Add School</CustomButton>
                </form>
            </div>
        )
    }
}

export default withRouter(SchoolAdd);