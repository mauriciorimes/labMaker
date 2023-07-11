import styles from "./BotaoPesquisar.module.css";

export default function BotaoPesquisar({ children, funcao }) {
    return(
        <button className={styles.BotaoPesquisar} onClick={funcao}> {children} </button>
    )
}