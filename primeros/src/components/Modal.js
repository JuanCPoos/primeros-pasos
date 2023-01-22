import React, { Component } from 'react';

function Modal() {
    return (        
        <div className='container-md mt-5 mb-5 mod'>
            <h1 className="banner__bienvenida">Escuela de iniciación para desarrolladores</h1>
            {/* <hr class="mb-5"></hr>    */}
            <div className="mensaje container mt-5 d-flex">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='img__mod'></img>
                <div className='mod__text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam saepe reprehenderit eos adipisci tempora non praesentium perferendis est quos voluptatibus blanditiis nostrum dolorem architecto facere asperiores nam et autem voluptate at omnis, natus dolorum sequi. Esse vel eligendi accusantium voluptatum eaque consectetur culpa, perspiciatis suscipit ad veritatis laboriosam, ullam temporibus voluptatem? Est, vitae alias! Nostrum ex vel, natus odit eveniet est laudantium consectetur dicta adipisci minus tempore omnis, pariatur animi aliquid mollitia tenetur quaerat. Atque dolores consequatur porro nisi, dolorum dicta autem amet blanditiis ea quas. Laboriosam nisi, reiciendis beatae dolores optio laudantium minima! Consectetur ex consequatur aspernatur ipsa.</p>
                </div>
            </div>
            <hr class="mt-5 mb-5"></hr>
            <div class="banner">
                <h1>¡ El presente y futuro es el software !</h1>
                <h6 class="mt-3">Queremos ayudarte a conocer y desplegar el desarrollador profesional que llevas dentro. </h6>                
            </div>
            <hr class="mt-5 mb-5"></hr>
            <div class="banner__explicaciones">
                <div className="mensaje container">
                    <h3 className="banner__box pt-4 pb-4">¿Qué es el software?</h3>
                    <div className="mod__text__2">
                        <p>El término software es un vocablo inglés que fue tomado por otros idiomas y designa a <strong>todo componente intangible (y no físico) que forma parte de dispositivos</strong> como computadoras, teléfonos móviles o tabletas y que permite su funcionamiento.<br></br><br></br>El software <strong>está compuesto por un conjunto de aplicaciones y programas</strong> diseñados para cumplir diversas funciones dentro de un sistema. Además, está formado por la información del usuario y los datos procesados.<br></br><br></br>Los programas que forman parte del software le indican al hardware (parte física de un dispositivo), por medio de instrucciones, los pasos a seguir.<br></br><br></br><span class="link__banner__software"><a href="https://concepto.de/software/#ixzz7r38fImOc"><strong>Fuente:</strong> concepto.de/software</a></span></p>
                    </div> 
                </div>

                <div class="mensaje mb-5 container">
                    <h3 class="banner__box mt-5 pt-4 pb-4">¿Qué es un software developer?</h3>
                    <div class="mod__text__2">
                        <p>El Software Developer es la persona responsable de crear sistemas informáticos e implementarlos. Estos desarrolladores son quienes escriben código que luego se traduce en un sitio web funcional o una aplicación. ¿Y a qué nos referimos con Software? El software en sí es el conjunto de instrucciones o programas que le dicen a los dispositivos qué hacer, cómo y cuándo.</p>
                    </div>               
                </div>  
                    
                <div>
                    <a href="#" class="align-text-bottom btn btn-danger">Leer más</a>
                </div>                    
                
            </div>            
            
                     
            <div class="row mt-5">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;