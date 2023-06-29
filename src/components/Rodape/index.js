import styles from './Rodape.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';

export default function Rodape() {
    return (
        <footer className={styles.Rodape}>
            <address>
                <ul>
                    <li> <LocationOnIcon className={styles.location} /></li>
                    <a href='https://goo.gl/maps/KbYmiT8W99vJCpBQ8' target="_blank" rel="noreferrer">
                        <li><address> Rodovia BR 356, Km3, Cidade Nova - Itaperuna, RJ - CEP 28.300-000 </address></li>
                    </a>
                </ul>
                <ul>
                    <li> <ApartmentIcon className={styles.IconeEndereco}/> </li>
                    <li> Instituto Federal Fluminense - Campus Itaperuna </li>
                </ul>
                <ul>
                    <li> <CallIcon className={styles.IconeTelefone}/> </li>
                    <li><address> Telefone: (22) 3826-2300 | 98826-0795 </address></li>
                </ul>                
            </address>
            <a href='https://www.linkedin.com/in/maur%C3%ADcio-rimes-4579701a7/' target="_blank" rel="noreferrer">
                <div>
                    <LinkedInIcon className={styles.linkedin} />
                    <p> Desenvolvido por: Mauricio Rimes </p>
                </div>
            </a>
        </footer>
    )
}