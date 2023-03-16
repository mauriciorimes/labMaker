import styles from './Inicio.module.css';

export default function Inicio() {
    return (
        <main className={styles.container}>
            <h1> Laboratório Maker do Instituto Federal Fluminense - Campus Itaperuna </h1>

            <article>
                O que é o Laboratório Maker:
                É um laboratório voltado ao desenvolvimento de projetos acadêmicos em geral.
                Ele terá espaços para trabalho colaborativo, ferramentas diversas, impressoras 3D,
                scanner 3D e cortadora à laser, além de outros materiais que poderão ser utilizados nas atividades.
            </article>
        </main>
    )
}