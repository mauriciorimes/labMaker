import { useState } from 'react';
import Botao from '../Botao';
import CampoHorario from '../CampoHorario';
import CampoTexto from '../CampoTexto';
import styles from './Formulario.module.css';
import { maskPhone } from '../Formulario/utils/Mascaras.js';
import { horarios } from '../Formulario/utils/Horarios.js';

export default function Formulario({ agendamentoEfetuado }) {    

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
        setHoraInicial('');
        setHoraFinal('');
    }

    const aoSalvar = (e) => {
        e.preventDefault();
        const horaInicialNumero = Number(horaInicial.replace(/[^0-9]/g, ''))
        const horaFinalNumero = Number(horaFinal.replace(/[^0-9]/g, ''))

        if (horaInicialNumero === horaFinalNumero || horaInicialNumero > horaFinalNumero) {
            alert('Horário final não pode ser igual ou menor que horário inicial')   
            
        } else {
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
            alert(`Agendamento realizado com sucesso!`)
            window.scrollTo(0, 0);
        }        
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