import styles from './FiltroTags.module.css';
import fotos from './fotos.json';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function FiltroTags({ tags, filtrarFotos, setItens }) {
    return (
        <div className={styles.FiltroTags}>
            <ul>
                <li>
                    <FilterAltIcon fontSize='large' className={styles.Icone}/>
                    <p> Filtre por tags: </p>
                </li>
            </ul>
            <ul className={styles.Categorias}>
                {tags.map(tag => (
                    <li onClick={() => filtrarFotos(tag)} key={tag}> {tag} </li>
                ))}
                <li onClick={() => setItens(fotos)}> Todos </li>
            </ul>
        </div>
    )
}