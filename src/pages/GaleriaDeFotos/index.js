import CardFoto from 'components/CardFoto';
import styles from './GaleriaDeFotos.module.css';
import Tags from 'components/TagsFotos';
import fotos from '../../components/TagsFotos/fotos.json';
import { useState } from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';

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
            <CardFoto fotos={itens} />
        </section>
    )
}