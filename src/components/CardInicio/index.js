import styles from './CardInicio.module.css';

export default function CardInicio({ imagem, alt, titulo, descricao }) {
    return(
        <div className={styles.CardInicio}>
            <img src={imagem} alt={alt}/>
            <h2> {titulo} </h2>
            <p> 
                {descricao}
            </p>
        </div>
    )
}