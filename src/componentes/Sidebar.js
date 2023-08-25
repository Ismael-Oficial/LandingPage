import '../App.css'

import Shop from './imgs/shopping.png'

function Sidebar(){

    function toggleInformation() {
        var info = document.getElementById('information');
        info.style.display = info.style.display === "block" ? "none" : "block";
      }
    
    return(
        <div className="Sidebar">
            <img src={Shop} alt="Carrinho de Compras" onClick={toggleInformation}/>

            <div id='information'>
                <p>O carrinho está vazio.</p>
            </div>
        </div>
    )
}

export default Sidebar