import styles from "./BotaoEnviar.module.css";

export default function BotaoEnviar({ children }) {
    return(
        <button 
            className={styles.botao}
            type='submit'        
        >
            {children}
        </button>
    )
}