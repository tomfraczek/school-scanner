import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, className, type, ...otherProps}) => (
    <div className='group'>
        {/* {console.log(type)} */}
        <input type={type} className={`${className ? className : ''} form-input`} onChange={handleChange} {...otherProps} />
        {label ? 
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
        </label> 
        : null
        }

    </div>
)

export default FormInput;