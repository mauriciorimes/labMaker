import Formulario from 'components/Formulario';
import styles from './Agendamento.module.css';
import IdVisitante from 'components/IdVisitante';

export default function Agendamento() {
    return (
        <div className={styles.container}>
            <Formulario />
            <IdVisitante />
        </div>
    )
}