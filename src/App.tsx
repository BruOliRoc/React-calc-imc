import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftArrow.png';
import {useState} from 'react';
import { GridItem } from './components/grid-item';
import {levels, calcularIMC, Level} from './helpers/imc';


const App = ()=>{

  const [campoDeAltura, setAltura] = useState<number>(0);
  const [campoDePeso, setPeso] = useState<number>(0);
  const [mostrarItem, setMostrarItem] = useState<Level | null>(null);

  const funçãoDeCalcular = ()=>{
    if(campoDeAltura && campoDePeso ){
      setMostrarItem(calcularIMC(campoDeAltura,campoDePeso));
    }else{
      alert('digite nos campos')
    }
  }

  const funçãoParaFechar =()=>{
    setMostrarItem(null);
    setAltura(0);
    setPeso(0);
  }
 
  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>O que é IMC? IMC é um sigla que significa Índice de Massa Corporal. Por sua vez, esta é uma medida de referência internacional reconhecida da Organização Mundial da Saúde (OMS). O IMC mede o nível de gordura no corpo de cada pessoa.</p>
          <input
          type="number"
          placeholder="Digite sua altura Ex: 1.5 (em metros)"
          value={campoDeAltura >0 ? campoDeAltura : ''}
          onChange={evento =>setAltura(evento.target.valueAsNumber)}
          disabled={mostrarItem? true : false}
          />
         
          <input
          type="number"
          placeholder="Digite seu peso Ex: 65.3 (em kilogramas)"
          value={campoDePeso >0 ? campoDePeso : ''}
          onChange={evento =>setPeso(evento.target.valueAsNumber)}
          disabled={mostrarItem? true : false}
          />

          <button onClick={funçãoDeCalcular} disabled={mostrarItem? true : false}>Calcular</button>
        </div>


        <div className={styles.rightSide}>
         {!mostrarItem &&
            <div className={styles.grid}>
              {levels.map((item,key)=>(
                <GridItem key={key} item={item}/>
              ))}
          </div>
        }
        {mostrarItem &&
          <div className={styles.rightGrande}>
            <div className={styles.rightSeta} onClick={funçãoParaFechar}>
              <img src={leftArrowImage} width={25}/>
            </div>
            <GridItem item={mostrarItem}/>
          </div>
        }
        </div>
      </div>
    </div>
  )

};



export default App;