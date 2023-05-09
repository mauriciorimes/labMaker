import styles from './TabelaAdmin.module.css';

export default function TabelaAdmin({ dados, data }) {
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
                    {/* <th>
                        Data
                    </th> */}
                    <th>
                        Horário inicial
                    </th>
                    <th>
                        Horário final
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
                        {/* <td> {agendamentos.data} </td> */}
                        <td> {agendamentos.horaInicial} </td>
                        <td> {agendamentos.horaFinal} </td>
                    </tr>                    
                </tbody>

            ))}

        </table>
    )
}