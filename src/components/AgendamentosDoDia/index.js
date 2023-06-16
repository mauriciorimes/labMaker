import TabelaAgendamentosDoDia from "components/TabelaAgendamentosDoDia";
import { db } from "db/agendamento";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import styles from './AgendamentosDoDia.module.css';
import NenhumAgendamentoDoDia from "components/NenhumAgendamentoDoDia";

export default function AgendamentosDoDia() {
    const [agendamentosDoDia, setAgendamentoDoDia] = useState([]);
    const [dataDoDia, setDataDoDia] = useState('')

    const useCollectionRef = collection(db, "agendamento")

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef)
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const filtro = todosAgendamentos.filter(filtrados => filtrados.data === dataDoDia)
            setAgendamentoDoDia(filtro)
            //console.log(filtro);
            console.log(agendamentosDoDia.length);
        };
        obterAgendamentos();
    }, [dataDoDia]);

    return (
        <section className={styles.AgendamentosDoDia}>
            <h2> Verifique os agendamentos do dia </h2>
            <div>
                <label> Selecione uma data para ver os agendamentos do dia: </label>
                <input
                    value={dataDoDia}
                    type="date"
                    onChange={(e) => setDataDoDia(e.target.value)}
                />
            </div>
            {agendamentosDoDia.length > 0 ? <TabelaAgendamentosDoDia dados={agendamentosDoDia}/> : <NenhumAgendamentoDoDia dataDoDia={dataDoDia}/>}
        </section>
    )
}