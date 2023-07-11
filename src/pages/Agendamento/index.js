import styles from "./Agendamento.module.css";
import Formulario from 'components/Formulario';
import AgendamentosDoDia from 'components/AgendamentosDoDia';
import ConferirAgendamento from 'components/ConferirAgendamento';

export default function Agendamento() {
    return (
        <div className={styles.container}>
            <AgendamentosDoDia />
            <Formulario />
            <ConferirAgendamento />
        </div>
    )
}