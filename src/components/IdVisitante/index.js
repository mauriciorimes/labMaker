import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'db/agendamento';
import IdArte from 'components/IdArte';
import styles from './IdVisitante.module.css';
import BotaoPesquisarEmail from 'components/BotaoPesquisarEmail';
import SearchIcon from '@mui/icons-material/Search';

export default function IdVisitante() {
    const [email, setEmail] = useState('');
    const [agendamento, setAgendamento] = useState([]);
    const [usuarioEncontrado, setUsusarioEncontrado] = useState([]);

    const useCollectionRef = collection(db, "agendamento")

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef)
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setAgendamento(todosAgendamentos)
        }
        obterAgendamentos();
    }, [])

    function pesquisarPorEmail() {
        const filtradoPorEmail = agendamento.filter(encontrado => encontrado.email === email)
        if (filtradoPorEmail) {
            console.log(`Encontrado`);
            console.log(filtradoPorEmail);
            setUsusarioEncontrado(filtradoPorEmail);

        } else {
            console.log('Email nao encontrado');
            alert(`Email nao encontrado`)
        }
    }

    return (
        <section className={styles.IdVisitante}>
            <nav>
                <h2> Confira seu agendamento, digite seu email: </h2>
                <div>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <BotaoPesquisarEmail funcao={pesquisarPorEmail}>
                        <SearchIcon />
                    </BotaoPesquisarEmail>                    
                </div>
            </nav>
                        
            <IdArte usuarioEncontrado={usuarioEncontrado} />
        </section>
    )
}