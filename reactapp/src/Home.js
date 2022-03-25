import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

export default class Home extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <Header/>
                
            </div>
        )
    }
}