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
        </div>
    )
}

export default Modal;