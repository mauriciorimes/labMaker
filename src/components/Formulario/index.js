import { useEffect, useState } from 'react';
import Botao from './Botao';
import CampoHorario from './CampoHorario';
import CampoTexto from './CampoTexto';
import styles from './Formulario.module.css';
import { maskPhone } from '../Formulario/utils/Mascaras.js';
import { horasAgendamento } from '../Formulario/utils/Horarios.js';
import { collection, getDocs, addDoc, query, where, ref } from 'firebase/firestore/lite';
import { db } from 'db/agendamento';
import { dataCortada } from './utils/Data';

const Formulario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [data, setData] = useState('');
    const [horaInicial, setHoraInicial] = useState('');
    const [horaFinal, setHoraFinal] = useState('');
    const [agendamento, setAgendamento] = useState([]);
    const [horasVagas, setHorasVagas] = useState(horasAgendamento)
    
    const [filtro, setFiltro] = useState([]);

    const useCollectionRef = collection(db, "agendamento")

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef)
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const filtroAgendamentosDoDia = todosAgendamentos.filter(filtrados => filtrados.data === data)
            setAgendamento(todosAgendamentos)
            

            const horariosIniciaisDoDia = filtroAgendamentosDoDia.map(h => h.horaInicial)
            const horariosFinaisDoDia = filtroAgendamentosDoDia.map(h => h.horaFinal)

            console.log(horariosIniciaisDoDia);
            

            const horariosDisponiveis = horasAgendamento.filter(h => h.disponivel === true)
            console.log(horariosDisponiveis);
            //setHorasVagas(horariosDisponiveis)

            
            
            

            
            
            // dia 17: 07h as 10h
            // horas iniciais nao permitidas: 07h/08h/09h
            // horas finais nao permitidas: 07h/8h/09h/10h


            

            

            
            
            
        };
        obterAgendamentos();
    }, [data, horaInicial, horaFinal]);    

    const limpaCampos = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setInstituicao('');
        setData('');
        setHoraInicial('');
        setHoraFinal('');
    }

    async function aoSalvar(e) {
        e.preventDefault();
        const horaInicialNumber = Number(horaInicial);
        const horaFinalNumber = Number(horaFinal) 
        
        //console.log(filtro);
        

        if (horaInicialNumber === horaFinalNumber || horaFinalNumber < horaInicialNumber) {
            alert('Horário final não pode ser igual ou menor que horário inicial');            

        } else {
            console.log({ nome, email, telefone, instituicao, data, horaInicial, horaFinal });
            const agend = await addDoc(useCollectionRef, {
                nome,
                email,
                telefone,
                instituicao,
                data,
                horaInicial,
                horaFinal
            })
            //console.log(agend);
            limpaCampos();
            alert(`Agendamento realizado com sucesso!`)        
            window.scrollTo(0, 0);
        }
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para completar seu agendamento</h2>

                <CampoTexto
                    label="Nome completo"
                    type="text"                    
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    minlength="8"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    obrigatorio={true}
                    minlength="12"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <label htmlFor="telefone"> Telefone </label>
                <input
                    className={styles.telefone}
                    label="Telefone"
                    type="tel"
                    placeholder="Digite seu telefone"
                    required
                    minlength="14"
                    value={telefone}
                    onChange={(e) => setTelefone(maskPhone(e.target.value))}
                />
                <CampoTexto
                    label="Instituição de origem"
                    placeholder="Digite onde você estuda"
                    obrigatorio={true}
                    valor={instituicao}
                    minlength="3"
                    aoAlterado={valor => setInstituicao(valor)}
                />
                <CampoTexto
                    label="Data"
                    type="date"
                    placeholder="Selecione a data"
                    obrigatorio={true}
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    min={dataCortada}
                />

                <CampoHorario
                    label="Horário inicial"
                    horarios={horasVagas}
                    valor={horaInicial}
                    aoAlterado={valor => setHoraInicial(valor)}
                />
                <CampoHorario
                    label="Horário final"
                    horarios={horasVagas}
                    valor={horaFinal}
                    aoAlterado={valor => setHoraFinal(valor)}
                />

                <Botao>
                    Agendar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;

