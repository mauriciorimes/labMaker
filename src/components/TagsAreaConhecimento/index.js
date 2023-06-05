import styles from './TagsConhecimento.module.css';

export default function TagsAreaConhecimento({ tags, filtrarAreaConhecimento }) {
    return (
        <ul className={styles.TagsAreaConhecimento}>
            {tags.map(tag => (
                <li key={tag} onClick={() => filtrarAreaConhecimento(tag)}> {tag} </li>
            ))}
        </ul>
    )
}