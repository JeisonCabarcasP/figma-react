import React from 'react'
import img1 from "../assets/img/IMG1.png"
import img2 from "../assets/img/IMG4.png"
import img3 from "../assets/img/IMG5.png"
const Info = () => {
    return (
        <div>
            <section class="main-blog">
                <div class="main-blog-container">
                    <div class="main-blog-frac1">
                        <div>
                            <h4>10 gastos que debes evitar</h4>
                            <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                        </div>
                        <img src={img1} alt="" />
                    </div>
                    <div class="main-blog-frac2">
                        <div>
                            <h4>10 gastos que debes evitar</h4>
                            <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                        </div>
                        <img src={img2} alt="" />
                    </div>
                    <div class="main-blog-frac3">
                        <div>
                            <h4>10 gastos que debes evitar</h4>
                            <p>Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.</p>
                        </div>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info
