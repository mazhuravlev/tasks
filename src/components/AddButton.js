import React from 'react';

const AddButton = (click) => {
    
    return (
        <button className="btn btn-primary" onClick={click}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
        </button>
    );
};

export default AddButton;