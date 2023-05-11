import styles from './CardTutorial.module.css';
import tutoriais from '../../components/TagsTutorial/tutoriais.json';

export default function CardTutorial({ itens }) {
    return (
        <ul className={styles.CardTutorial}>
            {itens.map(tutorial => (
                <li key={tutorial.id}>
                    <label> {tutorial.titulo} </label>
                    <a href={tutorial.video} target='_blank' rel="noreferrer"> Clique aqui para um video explicativo. </a>
                </li>
            ))}
        </ul>
    )
}

