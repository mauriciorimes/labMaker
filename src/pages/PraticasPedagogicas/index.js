import styles from './PraticasPedagogicas.module.css';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TagsTutorial from 'components/TagsTutorial';
import tutoriais from 'components/TagsTutorial/tutoriais.json';
import areaConhecimentos from 'components/TagsAreaConhecimento/areaConhecimento.json';
import { useEffect, useState } from 'react';
import CardTutorial from 'components/CardTutorial';
import TagsAreaConhecimento from 'components/TagsAreaConhecimento';
import CardAreaConhecimento from 'components/CardAreaConhecimento';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

export default function PraticasPedagogicas() {

    const [tutorial, setTutorial] = useState([]);
    const [areaConhecimento, setAreaConhecimento] = useState([]);
    const tagsAreaConhecimento = areaConhecimentos.map(tag => tag.tag)
    const tagsTutorial = tutoriais.map(tag => tag.tag);

    //     

    function filtrarTutoriais(tag) {
        const novosFiltros = tutoriais.filter(tutorial => (
            tutorial.tag === tag
        ))
        setTutorial(novosFiltros)
    }

    function filtrarAreaConhecimento(tag) {
        const novosFiltross = areaConhecimentos.filter(tutorial => (
            tutorial.tag === tag
        ))
        setAreaConhecimento(novosFiltross)
    }

    //

    
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
            <CardAreaConhecimento itens={areaConhecimento}/>

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
            <CardTutorial itens={tutorial} />
        </section>

    )
}