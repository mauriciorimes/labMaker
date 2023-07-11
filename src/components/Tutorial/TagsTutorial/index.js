import styles from "./TagsTutorial.module.css"

export default function TagsTutorial({ tags, filtrarTutoriais }) {
    return (
        <ul className={styles.TagsTutorial}>
            {tags.map(tag => (
                <li key={tag} onClick={() => filtrarTutoriais(tag)}> {tag} </li>
            ))}
        </ul>
    )
}