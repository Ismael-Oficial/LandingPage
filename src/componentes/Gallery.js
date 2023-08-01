import Foto1 from './imgs/galeria-1.jpg'
import Foto2 from './imgs/galeria-2.jpg'
import Foto3 from './imgs/galeria-3.jpg'
import Foto4 from './imgs/galeria-4.jpg'

function Gallery() {
    return (
        <div className="Gallery">
            <h2>Galeria de Fotos</h2>
            <div className="Pictures-1">
                <div className="Paint-1">
                    <img src={Foto1} alt='Foto da Galeria' />
                </div>
                <div className="Paint-2">
                    <img src={Foto2} alt='Foto da Galeria' />
                </div>
            </div>
            <div className="Pictures-2">
                <div className="Paint-3">
                    <img src={Foto3} alt='Foto da Galeria' />
                </div>
                <div className="Paint-4">
                    <img src={Foto4} alt='Foto da Galeria' />
                </div>
            </div>
        </div>
    )
}

export default Gallery