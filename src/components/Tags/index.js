import styles from './Tags.module.css';
import fotos from '../../pages/GaleriaDeFotos/fotos.json';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Tags({ tags, filtrarFotos, setItens }) {
    return (
        <div className={styles.tags}>
            <ul className={styles.filtro}>
                <li>
                    <FilterAltIcon />
                    <p>Filtre por tags:</p>
                </li>
            </ul>
            <ul className={styles.categorias}>
                {tags.map(tag => (
                    <li onClick={() => filtrarFotos(tag)} key={tag}>{tag}</li>
                ))}
                <li onClick={() => setItens(fotos)}>Todos</li>

            </ul>
        </div>
    )
}