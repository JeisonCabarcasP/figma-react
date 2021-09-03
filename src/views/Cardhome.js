import React from 'react'
import icon from "../assets/img/IMG.png"

const Cardhome = () => {
    return (
        <div>
            <section class="main-info">
                <div class="main-container-info">
                    <div class="main-text1">
                        <p class="main-text1-p">¿Que deseas para hoy?</p>
                    </div>
                    <div class="main-text2">
                        <p class="main-text2-p">Tu saldo</p>
                    </div>
                    <div class="main-text3">
                        <p class="main-text3-p">$1.827.495</p>
                    </div>
                    <div class="main-img">
                        <img src={icon} alt="Imagen de producto" />
                    </div>
                </div>
            </section>
            <section class="main-info-status">
                <div class="main-status">
                    <div class="main-status-text1">
                        <p>Compra 3D</p>
                    </div>
                    <div class="main-status-text2">
                        <p>Recarga a favor</p>
                    </div>
                    <div class="divider"></div>
                    <div class="main-status-text3">
                        <p>- $45.563</p>
                    </div>
                    <div class="main-status-text4">
                        <p>+ $135.948</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cardhome
