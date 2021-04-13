import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, className, type, ...otherProps}) => (
    <div className='group'>
        <input type={type} className={`${className ? className : ''} form-input`} onChange={handleChange} {...otherProps} />
    </div>
)

export default FormInput;