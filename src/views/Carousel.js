import React from 'react'
import img1 from "../assets/img/thumb.png"
import img2 from "../assets/img/Vector 6.png"
import img3 from "../assets/icons/play_circle_outline_24px.svg"
import icon from "../assets/icons/Counter.svg"
const Carousel = () => {
    return (
        <div>
            <section class="main-mjs">
                <div class="main-ahorro-title">
                    <h2>Los P*t@s del ahorro</h2>
                </div>
            </section>
            <section class="main-media">
                <div class="main-media-container">
                    <img class="media-img" src={img1} alt="" />
                    <img class="media-backg" src={img2} alt="" />
                    <img class="media-icon" src={img3} alt="" />
                    <h2>Esto es AHORRO</h2>
                    <p>Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</p>
                </div>
            </section>
            <section class="main-point">
                <div class="main-point-container">
                    <img src={icon} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Carousel
