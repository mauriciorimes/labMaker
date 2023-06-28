import styles from './TopoInicio.module.css';

export default function TopoInicio({ titulo, subtitulo, explicacao }) {
    return (
        <section className={styles.TopoInicio}>
            <h1> {titulo} </h1>

            <article> {subtitulo} </article>

            <h2> {explicacao} </h2>
        </section>
    )
}