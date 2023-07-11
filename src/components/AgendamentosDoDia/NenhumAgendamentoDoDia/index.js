import styles from "./NenhumAgendamentoDoDia.module.css";
import notCalendar from '../../../image/id/not_calendar.png';

export default function NenhumAgendamentoDoDia({ dataDoDia }) {
    const dataRecebida = dataDoDia;

    return (
        <div>
            {dataRecebida === '' ? '' : <div className={styles.NenhumAgendamentoDoDia}>
                <img src={notCalendar} alt='sem calendario'/>
                <span> Nenhum agendamento para a data selecionada. </span>
            </div>}
        </div>

    )
}