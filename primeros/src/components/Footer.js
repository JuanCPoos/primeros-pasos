import React, { Component } from "react"; 


class Footer extends Component{
    render() {
        return (
            <footer>
            <div className="container text-center">
                <div className="footer__wrapper pt-4 pb-4">
                    <div className="row">
                        <div className="col link__interes">
                            <ul class="menu">
                                <li><a href="#">link1</a></li>
                                <li><a href="#">link1</a></li>
                                <li><a href="#">link1</a></li>
                                <li><a href="#">link1</a></li>
                            </ul>                            
                        </div>
                        <div className="col text-justify">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, asperiores!</p>
                        </div>
                        <div className="col">
                            <p>Columna tres</p>
                        </div>
                    </div>
                </div>
            </div>        
        </footer>
        );
    }
}

export default Footer;