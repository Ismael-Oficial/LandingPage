import '../App.css';

import React, { useState } from 'react';

import CB300G from './imgs/cb300-gray.png';
import CB300R from './imgs/cb300-red.png';
import Motor from './imgs/motor.png';
import GPS from './imgs/mapa.png';
import Roda from './imgs/pneu.png';
import Tanque from './imgs/gasolina.png';

function About() {
  const [motoImage, setMotoImage] = useState(CB300G);

  function Vermelho() {
    setMotoImage(CB300R);
  }

  function Cinza() {
    setMotoImage(CB300G);
  }

  return (
    <div className='About'>
      <header>
        <h2>Conheça a Moto</h2>
        <p>
          A CB 300F Twister mais do que evoluiu. Com um visual marcante, imponente e esportivo, o modelo apresenta nova
          carenagem, traseira elevada e linhas arrojadas. Tudo para você também dar aquela twistada.
        </p>
      </header>
      <section>
        <img src={motoImage} id='moto' alt='CB 300' />
        <p>Cores</p>
        <button onClick={Vermelho}></button>
        <button onClick={Cinza}></button>
      </section>
      <footer>
        <div>
          <p>
            <img src={Motor} alt='Motor' />
          </p>
        </div>
        <div>
          <p>
            <img src={GPS} alt='Painel GPS' />
          </p>
        </div>
        <div>
          <p>
            <img src={Roda} alt='Pneus' />
          </p>
        </div>
        <div>
          <p>
            <img src={Tanque} alt='Tanque de Gasolina' />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
