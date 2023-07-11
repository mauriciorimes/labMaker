import styles from "./MenuLink.module.css";
import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({ children, rota }) {
    const localizacao = useLocation();   

    return(
        <Link 
            to={rota} 
            className={`
                ${styles.link}
                ${localizacao.pathname === rota ? styles.linkDestacado : ""}
            `}
        >
                <div> {children} </div>                
        </Link>
    )
}