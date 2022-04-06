import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar} from 'react-bootstrap';

export default function Header(){
    return(
        <Navbar  style={{backgroundColor:"#BD4B4B"}}>
            <Container >
                <Navbar.Brand href="#" style={{color:'white',fontSize:'2rem'}}>Mr.Viewer</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
