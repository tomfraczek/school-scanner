import React from 'react';

import './school-card.styles.scss';

const SchoolCard = ({school}) => (
    <div className='school-card'>
        <img className='logo' src={school.logo_url} alt="logo"/>

        <div className="card-details">
            <p><span>Name:</span><span>{school.name}</span></p>
            <p><span>Teacher:</span><span>{school.teacher}</span></p>
            <p><span>Country:</span><span>{school.country}</span></p>
            <p><span>City:</span><span>{school.city}</span></p>
            <span className="days-container">
                <span>Trainings on:</span>
                    <div className="days">
                        {
                            school.training_days.map((day, index) => <span key={index} className='day'>{day}</span>)
                        }   
                    </div>
            </span>
        </div>
    </div>
)

export default SchoolCard;