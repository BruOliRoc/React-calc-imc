import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImagem from '../../assets/up.png';
import downImagem from '../../assets/down.png';

type Props={
    item:Level
}

export const GridItem = ({item}:Props)=>{
    return(
        <div className={styles.main} style={ {backgroundColor: item.cor} }>
            <div className={styles.gridIcon}>
               <img src={item.icone === 'up'? upImagem : downImagem} width='30'/>
            </div>

            <div className={styles.gridTitle}>{item.titulo}</div>
            
            {item.seuIMC &&
                <div className={styles.seuIMC}>Seu IMC é de {item.seuIMC}kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}