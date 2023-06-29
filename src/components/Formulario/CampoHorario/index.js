import styles from './CampoHorario.module.css';

export default function CampoHorario({ label, horarios, aoAlterado }) {

    const aoEscolhido = (e) => {
        aoAlterado(e.target.value);
    }

    return(
        <div className={styles.campoHorario}>
            <label 
                htmlFor={label}> {label} </label>
            <select onChange={aoEscolhido} id={label}>
                {horarios.map(horario => (
                    <option key={horario}> {horario} </option>
                ))}
            </select>
        </div>
    )
}