import styles from './Inicio.module.css';
import CardInicio from '../../components/CardInicio';
import pessoas from '../../image/inicio/pessoas.png';
import robo from '../../image/inicio/robo.png';
import seguro from '../../image/inicio/seguro.png';



export default function Inicio() {
    return (
        <main className={styles.container}>
            <h1> Laboratório Maker do Instituto Federal Fluminense - Campus Itaperuna </h1>

            <article>                
                É um laboratório voltado ao desenvolvimento de projetos acadêmicos em geral.
                Ele terá espaços para trabalho colaborativo, ferramentas diversas, impressoras 3D,
                scanner 3D e cortadora à laser, além de outros materiais que poderão ser utilizados nas atividades.
            </article>   

            <section>
                <CardInicio
                    imagem={pessoas}
                    alt="Diversidade de pessoas"
                    titulo="Para todos" 
                    descricao="Não somente para alunos e servidores do Instituto. Mas para todos da comunidade!"               
                />
                <CardInicio
                    imagem={robo}
                    alt="Braço de robô"
                    titulo="Aprenda fazendo"
                    descricao="Projetos práticos criam confiança, persistência e habilidades de resolução de problemas."                
                />
                <CardInicio
                    imagem={seguro}
                    alt="Símbolo de segurança"
                    titulo="Ambiente seguro"
                    descricao="Todas visitas sao supervisionadas por instrutores, para auxiliar nas atividades."                
                />
            </section>
                   
        </main>
    )
}