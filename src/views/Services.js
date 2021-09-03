import React from 'react'
import img1 from "../assets/img/data.png"
import img2 from "../assets/img/logo.png"
const Services = () => {
    return (
        <div>
            <section class="main-portafolio-title">
                <div class="main-portafolio-container">
                    <div class="portafolio-title">
                        <p>Conoce tu portafolio</p>
                    </div>
                    <div class="portafolio-logo">
                        <p>Estratega</p>
                    </div>
                </div>
            </section>
            <section class="main-card-portafolio">
                <div class="main-card-portafolio-container">
                    <img src={img1} alt="" />
                    <div class="main-portafolio-text">
                        <img src={img2} alt="" />
                        <p class="portafolio-p1">FIC Old Mutual Efectivo</p>
                        <p class="portafolio-p2">$240.000</p>
                        <p class="portafolio-p3">Tipo de activo</p>
                        <p class="portafolio-p4">Renta fija Depósito a la fija</p>
                    </div>
                    <div class="main-portafolio-p5">
                        <p>
                            Tu dinero se invierte de la forma más eficiente de acuerdo al perfil
                            de riesgo asignado por nuestro RoboAdvisor
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
