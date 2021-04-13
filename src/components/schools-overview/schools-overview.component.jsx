import React from 'react';

import './schools-overview.styles.scss';

import { connect } from 'react-redux';
import { selectSchoolsForOverview } from '../../redux/school/school.selectors';

import { createStructuredSelector } from 'reselect';

import SchoolCard from '../../components/school-card/school-card.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SchoolsOverview extends React.Component{
    constructor(){
        super();

        this.state = {
            search: '',
            results: '',
        }
    }

    handleChange = event => {
        const target = event.target;
        const {name, value} = target;

        const results = this.props.schools.filter(school => school.name.toLowerCase().includes(event.target.value))

        this.setState({
            search: event.target.value,
            results: results
        });
    }

    handleClick = () => {
        this.setState({
            search: '',
            results: []
        })
    }

    render(){
        const {schools} = this.props;
        const {search, results} = this.state;
        return(
            <div className="schools-overview">
                <form className='sign-up-form'>
                    <FormInput 
                        type='text'
                        name='search'
                        value={search}
                        onChange={this.handleChange}
                        placeholder='Search'
                    />
                    {
                        search ?
                        <CustomButton 
                        className='remove-search'
                        onClick={this.handleClick}
                    >
                        &#x2715;
                        </CustomButton>
                        : null
                    }
                </form>

                <div className="school-cards">
                {
                    schools && !results.length && !search ? schools.map((school, index) => (
                        <SchoolCard key={index} school={school} />
                ))
                    : results.length ? results.map((school, index) => (
                        <SchoolCard key={index} school={school} />
                ))
                    : <p className='no-result-message'>no results found</p>
                    
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    schools: selectSchoolsForOverview
})

export default connect(mapStateToProps)(SchoolsOverview);