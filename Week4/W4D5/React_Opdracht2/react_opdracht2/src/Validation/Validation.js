import React from 'react';


const validation = ( props ) => {
    let validationCheck = "text OK";

    if (props.inputLength <= 5){
        validationCheck = "Text too short";
    }
    return (
        <div>
            <p>{validationCheck}</p>
        </div>
    );
};



export default validation;
