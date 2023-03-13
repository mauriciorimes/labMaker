import { Link } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, rota }) {
    return(
        <Link to={rota} className={styles.link}>
            <div> {children} </div>
        </Link>
    )
}