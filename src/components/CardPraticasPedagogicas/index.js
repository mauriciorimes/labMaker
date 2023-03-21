import styles from './CardPraticasPedagogicas.module.css'

export default function CardPraticasPedagogicas({ imagem, alt, descricao, titulo }) {
    return (
        <div className={styles.praticas}>
            <div className={styles.texto}>
                <h2> {titulo} </h2>
                <p> {descricao} </p>
            </div>
            <img src={imagem} alt={alt} />
        </div>
    )
}