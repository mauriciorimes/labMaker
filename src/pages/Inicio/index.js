import CardOqueFazer from 'components/CardOqueFazer';
import styles from './Inicio.module.css';
import CardInicio from 'components/CardInicio';
import pessoas from 'image/inicio/pessoas.png';
import robo from 'image/inicio/robo.png';
import seguro from 'image/inicio/seguro.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FeedIcon from '@mui/icons-material/Feed';
import { Link } from 'react-router-dom';

export default function Inicio() {
    return (
        <main className={styles.container}>
            <h1> Laboratório Maker do Instituto Federal Fluminense - Campus Itaperuna </h1>

            <article>
                É um laboratório voltado ao desenvolvimento de projetos acadêmicos em geral.
                Ele terá espaços para trabalho colaborativo, ferramentas diversas, impressoras 3D e
                scanner 3D, além de outros materiais que poderão ser utilizados nas atividades.
            </article>

            <h2> <strong>Veja</strong> o que você pode fazer em nosso site: </h2>

            <aside>
                <Link to="/agendamento">
                    <CardOqueFazer
                        primeiroIcone={<CalendarMonthIcon fontSize='large' />}
                        segundoIcone={<AccessTimeIcon fontSize='large' />}
                        textoUm="Agendar"
                        textoDois="uma visita!"
                    />
                </Link>

                <Link to="equipamentos">
                    <CardOqueFazer
                        primeiroIcone={<PrecisionManufacturingIcon fontSize='large' />}
                        segundoIcone={<ThreeDRotationIcon fontSize='large' />}
                        textoUm="Conhecer"
                        textoDois="nossos equipamentos."
                    />
                </Link>

                <Link to="/galeria">
                    <CardOqueFazer
                        primeiroIcone={<CameraAltIcon fontSize='large' />}
                        segundoIcone={<CollectionsIcon fontSize='large' />}
                        textoUm="Explorar"
                        textoDois="a galeria de fotos!"
                    />
                </Link>

                <Link to="/praticas">
                    <CardOqueFazer
                        primeiroIcone={<LocalLibraryIcon fontSize='large' />}
                        segundoIcone={<FeedIcon fontSize='large' />}
                        textoUm="Aprender"
                        textoDois="com as práticas pedagógicas"
                    />
                </Link>
            </aside>

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
                    descricao="Todas visitas são supervisionadas por instrutores, para auxiliar nas atividades."
                />
            </section>

        </main>
    )
}