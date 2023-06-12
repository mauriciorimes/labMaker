import styles from './BotaoLogin.module.css';

export default function BotaoLogin({ children }) {
    return(
        <button 
            className={styles.BotaoLogin}            
            type='submit'        
        >
            {children}
        </button>
    )
}