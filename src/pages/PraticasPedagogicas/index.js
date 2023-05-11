import styles from './PraticasPedagogicas.module.css';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TagsTutorial from 'components/TagsTutorial';
import tutoriais from 'components/TagsTutorial/tutoriais.json'
import { useState } from 'react';
import CardTutorial from 'components/CardTutorial';

export default function PraticasPedagogicas() {

    const [itens, setItens] = useState([]);
    const tags = tutoriais.map(tag => tag.tag);

    function filtrarTutoriais(tag) {
        const novosFiltros = tutoriais.filter(tutorial => (
            tutorial.tag === tag
        ))
        setItens(novosFiltros)
    }

    return (
        <section className={styles.Praticas}>
            <div>
                <PsychologyIcon fontSize='large' />
                <h2> Aulas práticas </h2>
            </div>

            <div>
                <AutoStoriesIcon fontSize='large' />
                <h2> Tutoriais </h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <TouchAppIcon fontSize='medium' />
                        <h3> Escolha um equipamento: </h3>
                    </li>
                </ul>
                <TagsTutorial tags={tags} filtrarTutoriais={filtrarTutoriais} />
            </nav>
            <CardTutorial itens={itens} />
        </section>

    )
}