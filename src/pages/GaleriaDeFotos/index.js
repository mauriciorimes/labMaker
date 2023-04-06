import CardFoto from 'components/CardFoto';
import styles from './GaleriaDeFotos.module.css';
import Tags from 'components/Tags';
import fotos from './fotos.json';
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
                    <NearMeIcon />
                    <h2> Navega pela Galeria </h2>
                </li>
            </ul>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
            <CardFoto fotos={itens} />
        </section>
    )
}