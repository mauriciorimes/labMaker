import Formulario from 'components/Formulario';
import styles from './Agendamento.module.css';

export default function Agendamento() {    

    const printaAgendamentos = (agendamento) => {
        console.log(agendamento);        
    }

    return (
        <div className={styles.container}>
            <Formulario agendamentoEfetuado={agendamento => printaAgendamentos(agendamento)}/>       
        </div>
    )
}