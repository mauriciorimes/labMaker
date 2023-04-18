import { useEffect, useState } from 'react';
import Botao from '../Botao';
import CampoHorario from '../CampoHorario';
import CampoTexto from '../CampoTexto';
import styles from './Formulario.module.css';
import { maskPhone } from '../Formulario/utils/Mascaras.js';
import { horarios } from '../Formulario/utils/Horarios.js';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { db } from 'db/firebase';

const Formulario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [data, setData] = useState('');
    const [horaInicial, setHoraInicial] = useState('');
    const [horaFinal, setHoraFinal] = useState('');
    const [agendamento, setAgendamento] = useState([]);

    const useCollectionRef = collection(db, "agendamento")

    useEffect(() => {
        const obterAgendamentos = async () => {
            const data = await getDocs(useCollectionRef)
            //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setAgendamento(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };        
        
        obterAgendamentos();
    }, []);    

    // O problema nao eh no useEffect
    console.log('Teste de renderizacao');    

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
        const horaInicialNumero = Number(horaInicial.replace(/[^0-9]/g, ''))
        const horaFinalNumero = Number(horaFinal.replace(/[^0-9]/g, ''))        

        if (horaInicialNumero === horaFinalNumero || horaInicialNumero > horaFinalNumero) {
            alert('Horário final não pode ser igual ou menor que horário inicial')

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
             console.log(agend);
            // console.log(horarios);
            // console.log(horaInicial);
            // console.log(horarios.includes(horaInicial));
            

            limpaCampos();
            alert(`Agendamento realizado com sucesso!`)
            window.scrollTo(0, 0);
        }
    }

    return (
        <section className={styles.formulario}>
            <ul>
                {agendamento.map(agendamento => (
                    <div>
                        <li> {agendamento.nome} </li>
                        <li> {agendamento.email} </li>
                        <li> {agendamento.telefone} </li>
                        <li> {agendamento.instituicao} </li>
                        <li> {agendamento.data} </li>
                        <li> {agendamento.horaInicial} </li>
                        <li> {agendamento.horaFinal} </li>
                    </div>

                ))}
            </ul>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para completar seu agendamento</h2>

                <CampoTexto
                    label="Nome"
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
                    value={telefone}
                    onChange={(e) => setTelefone(maskPhone(e.target.value))}                    
                />
                <CampoTexto
                    label="Instituição de origem"
                    placeholder="Digite onde você estuda"
                    obrigatorio={true}
                    valor={instituicao}
                    minlength="10"
                    aoAlterado={valor => setInstituicao(valor)}
                />
                <CampoTexto
                    label="Data"
                    type="date"
                    placeholder="Selecione a data"
                    obrigatorio={true}
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />

                <CampoHorario
                    label="Horário inicial"
                    horarios={horarios}
                    valor={horaInicial}
                    aoAlterado={valor => setHoraInicial(valor)}
                />
                <CampoHorario
                    label="Horário final"
                    horarios={horarios}
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

