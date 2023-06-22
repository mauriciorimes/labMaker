import styles from './TopoInicio.module.css';

export default function TopoInicio({ titulo, subtitulo, strong, explicacao }) {
    return (
        <section className={styles.TopoInicio}>
            <h1> {titulo} </h1>

            <article> {subtitulo} </article>

            <h2> <strong> {strong} </strong> {explicacao} </h2>
        </section>
    )
}