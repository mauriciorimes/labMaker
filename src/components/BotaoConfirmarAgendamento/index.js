import styles from './BotaoConfirmarAgendamento.module.css';

export default function BotaoConfirmarAgendamento({children}) {
    return(
        <button 
            className={styles.BotaoConfirmarAgendamento}            
            type='submit'                  
        >
            {children}
        </button>
    )
}