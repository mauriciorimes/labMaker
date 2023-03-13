import { useState } from 'react';
import Botao from '../Botao';
import CampoHorario from '../CampoHorario';
import CampoTexto from '../CampoTexto';
import styles from './Formulario.module.css';
import TelefoneBrasileiroInput from "react-telefone-brasileiro";

export default function Formulario({ agendamentoEfetuado }) {

    const horarios = [
        "07:00",
        "07:50",
        "08:40",
        "09:30",
        "09:50",
        "10:40",
        "11:30",
        "12:20",
        "13:10",
        "14:00",
        "14:50",
        "15:20",
        "16:10",
        "17:00",
        "17:50",
        "18:00",
        "18:50",
        "19:40",
        "20:40",
        "21:30",
        "22:20"
    ]

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [data, setData] = useState('');
    const [horaInicial, setHoraInicial] = useState('');
    const [horaFinal, setHoraFinal] = useState('');

    const limpaCampos = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setInstituicao('');
        setData('');
    }

    const aoSalvar = (e) => {
        e.preventDefault();
        agendamentoEfetuado({
            nome,
            email,
            telefone,
            instituicao,
            data,
            horaInicial,
            horaFinal
        })
        limpaCampos();
    }

    return (
        <section className={styles.formulario}>
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
                {/* <CampoTexto
                    label="Telefone"
                    type="tel"
                    placeholder="Digite seu telefone"
                    obrigatorio={true} valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                /> */}  
                <label for="telefone"> Telefone </label>              
                <TelefoneBrasileiroInput                    
                    className={styles.telefone}
                    placeholder="Digite seu telefone"
                    id="telefone"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    temDDD
                />                
                <CampoTexto
                    label="Instituição de origem"
                    placeholder="Digite onde você estuda"
                    obrigatorio={true} valor={instituicao}
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