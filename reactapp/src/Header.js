import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar} from 'react-bootstrap';

export default function Header(){
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#">Mr.Viewer</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
