import React, { Component } from 'react'; 

class Informacion extends Component { 
    render() {
        return (
            <div id="informacion" className='container'>
                <div class="banner__explicaciones">
                    <div className="mensaje ">
                        <h3 id="tituloUno" className="banner__box pt-4 pb-4">¿Qué es el software?</h3>
                            <div id="textoUno" className="mod__text__2">
                                <p>El término software es un vocablo inglés que fue tomado por otros idiomas y designa a <strong>todo componente intangible (y no físico) que forma parte de dispositivos</strong> como computadoras, teléfonos móviles o tabletas y que permite su funcionamiento.<br></br><br></br>El software <strong>está compuesto por un conjunto de aplicaciones y programas</strong> diseñados para cumplir diversas funciones dentro de un sistema. Además, está formado por la información del usuario y los datos procesados.<br></br><br></br>Los programas que forman parte del software le indican al hardware (parte física de un dispositivo), por medio de instrucciones, los pasos a seguir.<br></br><br></br><span class="link__banner__software"><a href="https://concepto.de/software/#ixzz7r38fImOc"><strong>Fuente:</strong> concepto.de/software</a></span></p>
                            </div> 
                    </div>
                    <div class="mensaje mb-5 container">
                        <h3 id="tituloDos" class="banner__box mt-5 pt-4 pb-4">¿Qué es un software developer?</h3>
                            <div id="textoDos" class="mod__text__2">
                                <p>El Software Developer es la persona responsable de crear sistemas informáticos e implementarlos. Estos desarrolladores son quienes escriben código que luego se traduce en un sitio web funcional o una aplicación. ¿Y a qué nos referimos con Software? El software en sí es el conjunto de instrucciones o programas que le dicen a los dispositivos qué hacer, cómo y cuándo.</p>
                            </div>               
                    </div>  
                        
                    <div>
                        <a id="link__btn__informacion" href="#" class="align-text-bottom btn btn-danger">Leer más</a>
                    </div>                                    
                </div>
            </div>
            
        );
    }
}

export default Informacion;