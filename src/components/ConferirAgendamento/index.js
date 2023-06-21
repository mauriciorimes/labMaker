import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'db/agendamento';
import IdArte from 'components/ConferirAgendamento/IdArte';
import styles from './ConferirAgendamento.module.css';
import BotaoPesquisarEmail from 'components/ConferirAgendamento/BotaoPesquisar';
import SearchIcon from '@mui/icons-material/Search';
import IdEmailNaoEncontrado from 'components/ConferirAgendamento/IdEmailNaoEncontrado';

export default function ConferirAgendamento() {
    const [email, setEmail] = useState('');
    const [agendamento, setAgendamento] = useState([]);
    const [usuarioEncontrado, setUsusarioEncontrado] = useState([]);
    const [autenticado, setAutenticado] = useState(false)

    const [nomeEnviado, setNomeEnviado] = useState([])

    const useCollectionRef = collection(db, "agendamento")

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef)
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setAgendamento(todosAgendamentos)
        }
        obterAgendamentos();
    }, [email])

    function pesquisarPorEmail() {
        const filtradoPorEmail = agendamento.filter(encontrado => encontrado.email === email)
        const nomeEnviar = [...new Set(filtradoPorEmail.map(nome => nome.nome))]
        setNomeEnviado(nomeEnviar)

        if (filtradoPorEmail.length > 0) {
            setAutenticado(false)
            console.log(`Encontrado`);
            console.log(nomeEnviar.length);
            // console.log(filtradoPorEmail);                 
            setUsusarioEncontrado(filtradoPorEmail);

        } else setAutenticado(true)
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
            {!autenticado ? <IdArte usuarioEncontrado={usuarioEncontrado} nome={nomeEnviado} /> : <IdEmailNaoEncontrado />}
        </section>
    )
}