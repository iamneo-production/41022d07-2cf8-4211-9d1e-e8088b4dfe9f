import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import carddata from './carddata';
import {Button} from 'react-bootstrap';

const  Search=()=>{
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-10 mb-5">
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-2 mb-5 d-grid">
                    <button className="btn btn-dark">Submit</button>
                </div>
            </div>
           
            {/* {
                carddata.cardData.map((items,index)=>{
                    return(
                        <Card  />
                    )
                })
            }
             */}
          

        </section>
    )
}

export default Search;