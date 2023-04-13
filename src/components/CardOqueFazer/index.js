import styles from './CardOqueFazer.module.css';

export default function CardOqueFazer({ primeiroIcone, segundoIcone, textoUm, textoDois }) {
    return(
        <div className={styles.Fazer}>
            <ul>
                <li> {primeiroIcone} </li>
                <li> {segundoIcone} </li>                
            </ul>
            <p> {textoUm} </p>
            <p> {textoDois} </p>
        </div>
    )
}