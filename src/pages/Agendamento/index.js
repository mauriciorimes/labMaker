import Formulario from 'components/Formulario';
import styles from './Agendamento.module.css';
import IdVisitante from 'components/IdVisitante';
import AgendamentosDoDia from 'components/AgendamentosDoDia';

export default function Agendamento() {
    return (
        <div className={styles.container}>
            <AgendamentosDoDia />
            <Formulario />
            <IdVisitante />
        </div>
    )
}