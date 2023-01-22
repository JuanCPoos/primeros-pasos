import React, { Component } from 'react';

function Programas() {
    return (
        <div className='base'>
            <div className='base__programas'>
                <div className="container banner__header__programas">
                    <div className="inner-container col-sm-6 col-md-6">
                        <h1>Los Programas</h1>
                    </div>
                 </div>
            </div>
            <div className='container programas__carousel'>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80" class="d-block w-60" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1649180564403-db28d5673f48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80" class="d-block w-60" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-60" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            

        </div>
    )
}

export default Programas;