import React from 'react';

const Button = ({link}) => {
    return (
        <div className='button-container'>
            <button className="btn">
                <a href={link} target="blank" title="Registration Link">
                    <span className='btn-span'>Count me in!</span>
                </a>
            </button>
        </div>
    );
}

export default Button;