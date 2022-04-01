import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import carddata from './carddata';
import {Row,Col,Card} from 'react-bootstrap';


const  Search=()=>{
    const [filteritem,setFilter]=useState('');

    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-10 mb-5">
                    <input type="text" className="form-control" 
                        onChange={event=>{
                            setFilter(event.target.value)
                        }}
                     />
                </div>
                <div className="col-2 mb-5 d-grid">
                    <button className="btn btn-dark">Submit</button>
                </div>
            </div>
           
            
             <Row md={3} lg={4}  xl={5} xs={2}>
             {
                carddata.cardData.filter((val)=>{
                    if(filteritem===""){
                        return val
                    }else if(val.title.toLowerCase().includes(filteritem.toLowerCase())){
                        return val
                    }else{
                        let s=0;
                        val.genre.forEach(element => {
                            if(element.toLowerCase().includes(filteritem.toLowerCase())){
                                s=1;
                            }
                        });
                        if(s===1) return val
                    }
                }).map((items,index)=>{
                    return(
                        <Col mx={3} style={{  marginBottom:'2rem'}}>
                            <Card style={{ width: '13rem' }}>
                                <Card.Img variant="top" src={items.img} />
                                <Card.Body>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Text>{items.year}</Card.Text>
                                    <Card.Text>{items.hour}</Card.Text>
                                    <Card.Text>{items.genre.join('/')}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            
             </Row>
          

        </section>
    )
}

export default Search;