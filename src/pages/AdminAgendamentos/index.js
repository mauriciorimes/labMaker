import TabelaAdmin from "components/TabelaAdmin";
import { db } from "db/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function AdminAgendamentos() {

    const [adminAgendamento, setAdminAgendamento] = useState([]);
    const [adminData, setAdminData] = useState('')

    const useCollectionRef = collection(db, "agendamento")

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef)
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }))          
            const filtro = todosAgendamentos.filter(filtrados => filtrados.data === adminData)            
            setAdminAgendamento(filtro)                      
        };
        obterAgendamentos();
    }, [adminData]);    

    return(
        <section>
            <label> Selecione uma data para ver os agendamentos do dia: </label>
            <input
                value={adminData} 
                type="date"
                onChange={(e) => setAdminData(e.target.value)}
            />            
            <TabelaAdmin dados={adminAgendamento} data={adminData}/>
        </section>
    )
}