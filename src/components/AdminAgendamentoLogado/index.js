import { db } from "db/agendamento";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import styles from './AdminAgendamentoLogado.module.css';
import TabelaAdmin from "./TabelaAdmin";

export default function AdminAgendamentoLogado() {

    const [adminAgendamento, setAdminAgendamento] = useState([]);
    const [adminData, setAdminData] = useState('');

    const useCollectionRef = collection(db, "agendamento");

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef);
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            const filtro = todosAgendamentos.filter(filtrados => filtrados.data === adminData);
            setAdminAgendamento(filtro);            
        };
        obterAgendamentos();
    }, [adminData]);

    return (
        <div className={styles.AdminAgendamentoLogado}>
            <h2> Área administrativa de agendamentos </h2>
            <div>
                <label> Selecione uma data para ver os agendamentos do dia: </label>
                <input
                    value={adminData}
                    type="date"
                    onChange={(e) => setAdminData(e.target.value)}
                />
            </div>
            <h3> Tabela não disponível para versão mobile. </h3>
            <TabelaAdmin dados={adminAgendamento} />
        </div>
    )
}