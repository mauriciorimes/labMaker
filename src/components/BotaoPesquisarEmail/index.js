import styles from './BotaoPesquisarEmail.module.css';

export default function BotaoPesquisarEmail({ children, funcao }) {
    return(
        <button className={styles.BotaoPesquisarEmail} onClick={funcao}> {children} </button>
    )
}