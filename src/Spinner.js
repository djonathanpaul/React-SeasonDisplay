import React from 'react';

const Spinner = (props)=>{

    return (

        <div className="ui active dimmer">
            <div className="ui big text loader">
                <h1>{props.message}</h1>
            </div>
        </div>
    );
}

Spinner.defaultProps ={
    message:'Loading.....'
}

export default Spinner;