import '../App.css';

import React, { useState } from 'react';

import CB300G from './imgs/cb300-gray.png';
import CB300R from './imgs/cb300-red.png';
import CB300Y from './imgs/cb300-gold.png';
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

  function Dourado() {
    setMotoImage(CB300Y);
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
        <button onClick={Dourado}></button>
      </section>
      <footer>
        <div>
          <p>
            <img src={Motor} alt='Motor' 
            title='
            Tipo: OHC, monocilíndrico, 4 tempos, arrefecido a ar.
            Cilindrada: 293,5 cc
            Potência Máxima: 24,5 CV a 7.500 rpm (gasolina) / 24,7 CV a 7.500 rpm (etanol)
            Torque Máximo: 2,61 kgf.m a 5.500 rpm (gasolina) / 2,67 kgf.m a 5.500 (etanol)
            Transmissão: 6 velocidades
            Sistema de Partida: Elétrica
            Diâmetro x Curso: 77,0 x 63,0 mm
            Relação de Compressão: 9,3 : 1
            Sistema Alimentação: Injeção Eletrônica, PGM FI
            Combustível: Gasolina / Álcool'
            />
          </p>
        </div>
        <div>
          <p>
            <img src={GPS} alt='Painel GPS' 
            title='
            Tecnológica, a CB 300F Twister conta agora com um painel blackout surpreendente, 100% digital e com indicador de marcha inspirado nas motos de alta cilindrada, que facilita a leitura das informações independentemente da luminosidade.'/>
          </p>
        </div>
        <div>
          <p>
            <img src={Roda} alt='Pneus' 
            title='
            Estilo e performance: com rodas de liga leve de 17” totalmente repaginadas e pneu traseiro mais robusto, a nova CB 300F Twister proporciona maior aderência ao solo e um ótimo desempenho na pilotagem.
            
            Com aumento de 37 para 41 no diâmetro do garfo dianteiro e suspensão traseira ampliada de 108 mm para 120 mm, a CB 300F Twister possui ainda mais força para absorver impactos, garantindo controle e conforto mesmo nas vias irregulares.'/>
          </p>
        </div>
        <div>
          <p>
            <img src={Tanque} alt='Tanque de Gasolina'
            title='
            Tanque de Combustível: 14,1 litros
            Óleo do Motor: 2 litros' />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
