import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

const Card=()=>{
    return(
        <div className="col-11 col-md-6 col-lg mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow" style={{width:'18rem'}}>
                <img src="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">card title</h5>
                    <p className="card-text">descp</p>
                </div>

            </div>

        </div>

    )
}

export default Card