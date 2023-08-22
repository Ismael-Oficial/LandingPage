import '../App.css';

import Banner from '../componentes/imgs/Banner.jpeg'

function Contact() {
    return (
        <div className='Contato'>
            <div className="Content">
                <div className='Banner'>
                    <img src={Banner} alt='Imagem de Fundo' />
                </div>
                <div className='Formulario'>
                    <h2>Contato</h2>
                    <input type='text' placeholder='Insira seu Nome Completo' maxLength={45}/>
                    <input type='email' placeholder='E-mail para Contato' maxLength={45}/>
                    <textarea placeholder='Digite sua Mensagem'/>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Contact