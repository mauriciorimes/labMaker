import styles from './TabelaAgendamentosDoDia.module.css';

export default function TabelaAgendamentosDoDia({ dados }) {

    return (

        <table className={styles.TabelaAgendamentosDoDia}>
            <thead>
                <tr>
                    <th>
                        Nome
                    </th>
                    <th>
                        Horário
                    </th>
                    {/* <th>
                            Horário final
                        </th> */}
                </tr>

            </thead>

            {dados.map(agendamentos => (
                <tbody>
                    <tr>
                        <td> {agendamentos.nome} </td>
                        <td> De {agendamentos.horaInicial}:00 às {agendamentos.horaFinal}:00 </td>
                        {/* <td> {agendamentos.horaFinal}:00 </td> */}
                    </tr>
                </tbody>
            ))}
        </table>

    )
}