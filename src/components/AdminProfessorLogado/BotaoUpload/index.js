import styles from './BotaoUpload.module.css';

export default function BotaoUpload({ children }) {
    return(
        <button 
            className={styles.BotaoUpload}            
            type='submit'        
        >
            {children}
        </button>
    )
}