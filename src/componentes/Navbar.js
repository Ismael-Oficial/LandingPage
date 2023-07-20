import '../App.css'

import logo from './imgs/Honda.png'
import menu from './imgs/menu.png'

function Navbar() {

    return (
        <div className="Navbar">
            <ul>
                <li>
                    <img src={logo} alt="Logo Honda" />
                </li>
                <li>Inicio</li>
                <li>Motos</li>
                <li>Peças</li>
                <li>Serviços</li>
                <li>Concessionária</li>
                <li>
                    <img src={menu} alt="Menu de Opções" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar