import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';

function Card(props){
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow" style={{width:'18rem'}}>
                <img src="{props.img}" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                
                    </p>
                </div>

            </div>

        </div>

    )
}

export default Card