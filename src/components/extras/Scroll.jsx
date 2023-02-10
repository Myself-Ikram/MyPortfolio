import React from "react";
import Container from "react-bootstrap/Container";
import {FaArrowUp} from "react-icons/fa";
function Scroll(){
    return(
            <Container className="sticky-bottom d-flex justify-content-end pb-3">
            <a className="btn bg-dark text-light rounded-circle"  style={{border : "5px solid #ff5823"}} href="#home"><FaArrowUp/></a>
        </Container>  
    )
}

export default Scroll;