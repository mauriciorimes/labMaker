import styles from "./Tutorial.module.css";

export default function Tutorial({ itens }) {
    return (
        <ul className={styles.Tutorial}>
            {itens.map(tutorial => (
                <li key={tutorial.id}>
                    <label> {tutorial.titulo} </label>
                    <a href={tutorial.video} target='_blank' rel="noreferrer"> Clique aqui para um vídeo explicativo. </a>
                </li>
            ))}
        </ul>
    )
}

