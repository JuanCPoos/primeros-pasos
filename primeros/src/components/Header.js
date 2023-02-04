import React, { Component } from "react";

class Header extends Component { 
    render() { 
        return (
            <div class="container header" >
            <div class="header__wrapper">
                <div class="logo">
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                            Primeros Pasos para ser un Dev
                            </a>
                        </div>
                    </nav>
                </div> 
                <nav class="nav">
                    <ul class="menu">
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link1</a></li>
                    </ul>
                </nav>
            </div>        
        </div>
        );
    }
}
export default Header;