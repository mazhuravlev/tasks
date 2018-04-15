import React from 'react';

const AddButton = ({click}) => {
    
    return (
        <button className="btn btn-primary" onClick={click}>
            <span>+</span>
        </button>
    );
};

export default AddButton;