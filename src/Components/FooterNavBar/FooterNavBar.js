import React from 'react'
import icon1 from "../../assets/icons/home_24px.svg"
import icon2 from "../../assets/icons/format_list_bulleted_24px.svg"
import icon3 from "../../assets/img/invest.png"
import icon4 from "../../assets/icons/account_circle_24px.svg"
import icon5 from "../../assets/icons/more_horiz_24px.svg"

const FooterNavBar = () => {
    return (
        <div>
                <footer>
      <div className="footer-container">
        <div className="footer-element">
          <img src={icon1} alt=""/>
          <p>Inicio</p>
        </div>
        <div className="footer-element">
          <img src={icon2} alt=""/>
          <p>Historial</p>
        </div>
        <div class="footer-element-plus">
          <img src={icon3} alt=""/>
        </div>
        <div className="footer-element">
          <img src={icon4} alt=""/>
          <p>Perfil</p>
        </div>
        <div className="footer-element">
          <img src={icon5} alt=""/>
          <p>Mas</p>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default FooterNavBar
