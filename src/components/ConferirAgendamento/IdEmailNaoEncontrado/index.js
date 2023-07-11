import styles from "./IdEmailNaoEncontrado.module.css";
import emailNotFound from 'image/id/email_not_found.png';

export default function IdEmailNaoEncontrado() {
    return(
        <section className={styles.IdEmailNaoEncontrado}>
            <img src={emailNotFound} alt='email not found'/>
            <span> Email não encontrado! </span>
        </section>
    )
}