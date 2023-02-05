import React, { Component } from 'react';

export class StackBackend extends { Component } {
    render() {
        return (
            <div id="stack__back" className='stack container mb-5'>
                <div className="titulo__stack">
                    <h2>Stack básico para un Back Dev</h2>
                    {/* implementar que al tocar la barra del stack, se desplieguen las herramientas de básicas de cada stack */}
                </div>              
                  {/* Dos tarjetas */}
                <div id="cards__modif" class="row mt-5">
                    <div class="card__Uno col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">HTML</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="card__Dos col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CSS</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FIN Dos tarjetas */}                        
               
            </div>
        );
    }
}