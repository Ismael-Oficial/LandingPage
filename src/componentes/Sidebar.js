import '../App.css'

import Shop from './imgs/shopping.png'

function Sidebar(){
    return(
        <div className="Sidebar">
            <img src={Shop} alt="Carrinho de Compras"/>
        </div>
    )
}

export default Sidebar