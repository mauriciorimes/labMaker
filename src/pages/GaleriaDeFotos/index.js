import styles from './GaleriaDeFotos.module.css';
import Tags from 'components/Fotos/TagsFotos';
import fotos from '../../components/Fotos/TagsFotos/fotos.json';
import { useState } from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';
import Fotos from 'components/Fotos';

export default function GaleriaDeFotos() {
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map(tag => tag.tag))]


    function filtrarFotos(tag) {
        const novasFotos = fotos.filter(foto => (
            foto.tag === tag
        ))
        setItens(novasFotos)
    }

    return (
        <section className={styles.galeria}>
            <ul>
                <li>
                    <NearMeIcon fontSize='large' />
                    <h2> Navega pela Galeria </h2>
                </li>
            </ul>
            <nav>
                <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
            </nav>
            <Fotos fotos={itens} />
        </section>
    )
}