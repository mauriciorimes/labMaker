import BotaoConfirmarAgendamento from 'components/BotaoConfirmarAgendamento';
import styles from './TabelaAdmin.module.css';

export default function TabelaAdmin({ dados }) {

    

    return (
        <table className={styles.TabelaAdmin}>
            <thead>
                <tr>
                    <th>
                        Nome
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Telefone
                    </th>
                    <th>
                        Instituição
                    </th>
                    <th>
                        Horário inicial
                    </th>
                    <th>
                        Horário final
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>

            {dados.map(agendamentos => (
                <tbody>
                    <tr>
                        <td> {agendamentos.nome} </td>
                        <td> {agendamentos.email} </td>
                        <td> {agendamentos.telefone} </td>
                        <td> {agendamentos.instituicao} </td>
                        <td> {agendamentos.horaInicial} </td>
                        <td> {agendamentos.horaFinal} </td>
                        <td>
                            <form action='mailto:mauriciorimes@gmail.com' method='post' encType='text/plain'>                                
                                <BotaoConfirmarAgendamento> Confirmar </BotaoConfirmarAgendamento>
                            </form>
                        </td>
                    </tr>
                </tbody>

            ))}

        </table>
    )
}