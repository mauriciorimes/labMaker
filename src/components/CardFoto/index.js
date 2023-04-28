import styles from './CardFoto.module.css';
export default function CardFoto({ fotos }) {

    return (

        <ul className={styles.CardFoto}>

            {fotos.map(foto => (
                <li key={fotos.titulo}>
                    <img src={foto.imagem} alt={foto.titulo} />
                    <p> {foto.titulo} </p>
                </li>
            ))
            }

        </ul >
    )
}