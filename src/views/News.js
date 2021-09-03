import React from 'react'
import icon1 from "../assets/icons/add_circle_outline_24px.svg"
import icon2 from "../assets/img/IMG2.png"
import icon3 from "../assets/img/IMG3.png"
import img1 from "../assets/img/s_donut.png"
import img2 from "../assets/img/s_donut(1).png" 
const News = () => {
    return (
        <div>
                  <section class="main-meta">
        <div class="main-meta-d">
          <div class="main-title">
            <h3 class="title-meta">Novedades</h3>
          </div>
          <div class="main-title-img">
            <img
              src={icon1}
              alt="Notificaciones"
            />
          </div>
        </div>
      </section>
      <section class="main-goal">
        <div class="main-goal-container">
          <div class="main-goal-info1">
            <div class="main-goal-p1">
              <img src={icon2} alt="Isla" />
              <p>Viaje a las islas canarias</p>
            </div>
            <div class="main-goal-p2">
              <img src={img2} alt="" />
              <div class="main-goal-p2-p1">
                <p class="p1">$1.600.000</p>
                <p class="p2">$8.000.000</p>
              </div>
            </div>
          </div>
          <div class="main-goal-info2">
            <div class="main-goal-p1">
              <img src={icon3} alt="Computer" />
              <p>Macbook PC</p>
            </div>
            <div class="main-goal-p2">
              <img src={img1} alt="" />
              <div class="main-goal-p2-p2">
                <p class="p1">$0</p>
                <p class="p2">$7.000.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default News
