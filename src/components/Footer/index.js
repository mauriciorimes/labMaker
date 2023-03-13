import styles from './Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <address>
                <ul>
                    <li><LocationOnIcon className={styles.location} /></li>
                    <li>Rodovia BR 356, Km3, Cidade Nova - Itaperuna, RJ - CEP 28.300-000</li>
                </ul>
                <ul>
                    <li><ApartmentIcon /></li>
                    <li>Instituto Federal Fluminense - Campus Itaperuna</li>
                </ul>
                <ul>
                    <li><CallIcon /></li>
                    <li>Telefone: (22) 3826-2300 | 98826-0795</li>
                </ul>                
            </address>
            <a href='https://www.linkedin.com/in/maur%C3%ADcio-rimes-4579701a7/' target="_blank" rel="noreferrer">
                <div>
                    <LinkedInIcon className={styles.linkedin} />
                    <p>Desenvolvido por: Mauricio Rimes</p>
                </div>
            </a>
        </footer>
    )
}