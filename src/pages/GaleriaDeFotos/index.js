import styles from "./GaleriaDeFotos.module.css";
import fotos from '../../components/Fotos/FiltroTags/fotos.json';
import { useState } from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';
import Fotos from 'components/Fotos';
import FiltroTags from 'components/Fotos/FiltroTags';

export default function GaleriaDeFotos() {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map(tag => tag.tag))];

    function filtrarFotos(tag) {
        const novasFotos = fotos.filter(foto => (
            foto.tag === tag
        ));
        setItens(novasFotos);
    }

    return (
        <section className={styles.Galeria}>
            <ul>
                <li>
                    <NearMeIcon fontSize='large' className={styles.Icone}/>
                    <h2> Navegue pela Galeria </h2>
                </li>
            </ul>
            <nav>
                <FiltroTags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
            </nav>
            <Fotos fotos={itens} />
        </section>
    )
}