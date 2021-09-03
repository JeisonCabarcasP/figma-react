import React from 'react'
import icon from "../../assets/icons/notifications_24px.svg"

const Header = () => {
    return (
        <header>
        <div className="header-title">
          <h3 class="title">Hola, Hannah</h3>
        </div>
        <div className="header-img">
          <img src={icon} alt="Notificaciones" />
        </div>
      </header>
    )
}

export default Header
