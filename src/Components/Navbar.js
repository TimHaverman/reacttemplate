import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
import {Logo} from "../Images/logo192.png";

export default class Navbar extends Component {
    state={
        isOpen:false
    };
    handleToggle = () =>{
        this.setState({isOpen:!this.setState.isOpen});
    };
    
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={{Logo}} alt="stuff" />  
                        </Link>
                        <button type="button" 
                            className="nav-btn"
                            onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />    
                        </button>
                    </div>     

                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">products</Link>
                        </li>
                    </ul>   
                </div>
            </nav>
        )
    }
}