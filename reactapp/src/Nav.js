import React,{useState,useEffect} from 'react';
import "./Nav.css";
function Nav() {
    const [show,handleShow]=useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(() => {
      window.addEventListener("scroll",transitionNavBar);
      return () => {
        window.removeEventListener("scroll",transitionNavBar);
      }
    }, [])
    
  return (
    <div className={`nav ${show&&'nav_black'}`}>
        <div className="nav_contents">
            <h1 className="nav_logo">MR.VIEWER</h1>
            <img className="nav_avatar" src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57" alt=''></img>
        </div>
    </div>
  )
}

export default Nav;