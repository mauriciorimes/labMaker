import styles from "./Fotos.module.css";

export default function Fotos({ fotos }) {
    return (
        <ul className={styles.Fotos}>
            {fotos.map(foto => (
                <li key={foto.titulo}>
                    <img src={foto.imagem} alt={foto.titulo} />
                    <p> {foto.titulo} </p>
                </li>
            ))
            }
        </ul >
    )
}