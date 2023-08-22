import '../App.css'

import Twitter from './imgs/twitter.png'
import YouTube from './imgs/youtube.png'
import Instagram from './imgs/instagram.png'

function Footer() {

    return (
        <div className='Footer'>
            <div className='content'>
                <h3>Redes Sociais</h3>
                <img src={Twitter} alt='Ícone Twitter' />
                <img src={Instagram} alt='Ícone Instagram' />
                <img src={YouTube} alt='Ícone YouTube' />
            </div>
            <div className='content'>
                <h3>Serviços</h3>
                <p>Manutenção</p>
                <p>Test Drive</p>
                <p>Financiamento</p>
            </div>
            <div className='content'>
                <h3>Concessionaria</h3>
                <p>Honda São Paulo</p>
                <p>Honda Minas Gerais</p>
                <p>Honda Rio de Janeiro</p>
            </div>
            <div className='content'>
                <h3>Contato</h3>
                <p>Whatsapp: (xx) xxxxx-xxxx</p>
                <p>Email: example@example.com</p>
                <p>CEP: xxxxx-xxx</p>
            </div>
            <div className='content'>
                <p>Desenvolvido por <span>Ismael Chaves</span></p>
            </div>
        </div>
    )
}

export default Footer