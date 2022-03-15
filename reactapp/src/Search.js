import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import {Button} from 'react-bootstrap';

const  Search=()=>{
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <input type="text" className="form-control"/>
                </div>
            
            </div>
            <Card />

        </section>
    )
}

export default Search;