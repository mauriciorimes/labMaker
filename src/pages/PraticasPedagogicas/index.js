import styles from './PraticasPedagogicas.module.css';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TagsTutorial from 'components/TagsTutorial';
import tutoriais from 'components/TagsTutorial/tutoriais.json';
import { useState } from 'react';
import PdfDownloads from 'components/PdfDownloads';
import Tutorial from 'components/Tutorial';

export default function PraticasPedagogicas() {

    const [tutorial, setTutorial] = useState([]);        
    const tagsTutorial = tutoriais.map(tag => tag.tag);     

    function filtrarTutoriais(tag) {
        const novosFiltros = tutoriais.filter(tutorial => (
            tutorial.tag === tag
        ))
        setTutorial(novosFiltros)
    }

    return (
        <section className={styles.Praticas}>
            <div>
                <PsychologyIcon fontSize='large' />
                <h2> Aulas práticas </h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <TouchAppIcon fontSize='medium' />
                        <h3> Clique para baixar um aula: </h3>
                    </li>
                </ul>                
            </nav>
            <PdfDownloads />

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
                <TagsTutorial tags={tagsTutorial} filtrarTutoriais={filtrarTutoriais} />
            </nav>
            <Tutorial itens={tutorial} />
        </section>

    )
}