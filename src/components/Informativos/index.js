import styles from './Informativos.module.css';

export default function Informativos({ imagem, alt, titulo, descricao }) {
    return(
        <div className={styles.Informativos}>
            <img src={imagem} alt={alt}/>
            <h2> {titulo} </h2>
            <p>{descricao}</p>
        </div>
    )
}