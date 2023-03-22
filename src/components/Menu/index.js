import styles from './Menu.module.css';
import MenuLink from './MenuLink';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <header>
            <nav className={styles.Menu}>
                <Link to="/" className={styles.link}>
                    <h2 className={styles.labmaker}> LabMaker </h2>
                </Link>
                <section>
                    <MenuLink rota="/">
                        <ul className={styles.linkDestacado}>
                            <li><HomeIcon /></li>
                            <li>Início</li>
                        </ul>
                    </MenuLink>
                    <MenuLink rota="/agendamento">
                        <ul>
                            <li><CalendarMonthIcon /></li>
                            <li>Agendar</li>
                        </ul>
                    </MenuLink>
                    <MenuLink rota="/equipamentos">
                        <ul>
                            <li><PrecisionManufacturingIcon /></li>
                            <li>Equipamentos</li>
                        </ul>
                    </MenuLink>
                    <MenuLink rota="/galeria">
                        <ul>
                            <li><CameraAltIcon /></li>
                            <li>Galeria de Fotos</li>
                        </ul>
                    </MenuLink>
                    <MenuLink rota="/praticas">
                        <ul>
                            <li><LocalLibraryIcon /></li>
                            <li>Práticas Pedagógicas</li>
                        </ul>
                    </MenuLink>
                </section>
            </nav>
        </header>
    )
}