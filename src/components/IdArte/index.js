import styles from './IdArte.module.css';
import people from '../../image/id/people.png'

export default function IdArte({ usuarioEncontrado }) {
    return (
        <div className={styles.IdArte}>
            {/* <h3> Agendamento encontrado: </h3> */}
            <img src={people} alt='people' />
            {/* <h2> Cartao do visitante </h2> */}
            {usuarioEncontrado.map(usuario => (
                <div>
                    <h2> {usuario.nome} </h2>
                    <h3> VISITANTE </h3>
                    <ul>
                        {/* <li> Nome: {usuario.nome} </li> */}
                        <li> Data: {usuario.data} </li>
                        <li> Horário: de {usuario.horaInicial}:00 às {usuario.horaFinal}:00 </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}