import '../App.css';

import Banner from '../componentes/imgs/Banner.jpeg'

function Contact() {
    return (
        <div className='Contato'>
            <div className="Content">
                <div className='Banner'>
                    <img src={Banner} alt='Imagem de Fundo' />
                </div>
                <form className='Formulario'>
                    <h2>Contato</h2>
                    <input type='text' placeholder='Insira seu Nome Completo' required maxLength={45}/>
                    <input type='email' placeholder='E-mail para Contato' required maxLength={45}/>
                    <textarea placeholder='Digite sua Mensagem' required/>
                    <input type='submit' value='Enviar' />
                </form>
            </div>
        </div>
    )
}

export default Contact