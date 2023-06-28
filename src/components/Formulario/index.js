import { useEffect, useState } from 'react';
import CampoHorario from './CampoHorario';
import CampoTexto from './CampoTexto';
import styles from './Formulario.module.css';
import { maskPhone } from '../Formulario/utils/Mascaras.js';
import { horasEntrada, horasSaida } from '../Formulario/utils/Horarios.js';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { db } from 'db/agendamento';
import { dataCortada } from './utils/Data';
import BotaoEnviar from './BotaoEnviar';

const Formulario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [data, setData] = useState('');
    const [horaInicial, setHoraInicial] = useState(7);
    const [horaFinal, setHoraFinal] = useState(8);
    const [horaInicialAgendada, setHoraInicialAgendada] = useState('');
    const [horaFinalAgendada, setHoraFinalAgendada] = useState('');

    const useCollectionRef = collection(db, "agendamento");

    useEffect(() => {
        const obterAgendamentos = async () => {
            const dataBD = await getDocs(useCollectionRef);
            const todosAgendamentos = dataBD.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            const filtroAgendamentosDoDia = todosAgendamentos.filter(filtrados => filtrados.data === data);
            const hInicial = filtroAgendamentosDoDia.map(h => h.horaInicial);
            const hFinal = filtroAgendamentosDoDia.map(h => h.horaFinal);

            setHoraInicialAgendada(hInicial);
            setHoraFinalAgendada(hFinal);
        };
        obterAgendamentos();
    }, [data]);

    const limpaCampos = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setInstituicao('');
        setData('');
        setHoraInicial(7);
        setHoraFinal(8);
    }

    function verificaHorario(entrada, saida) {

        const entradaNumber = Number(entrada);
        const saidaNumber = Number(saida);

        const arrayNumerosInicial = horaInicialAgendada.map(Number);
        const arrayNumerosFinal = horaFinalAgendada.map(Number);

        const horariosUsados = [];

        for (let i = 0; i < horaInicialAgendada.length; i++) {
            for (let j = arrayNumerosInicial[i]; j < arrayNumerosFinal[i]; j++)
                horariosUsados.push(j);
        }
        console.log(horariosUsados);

        if (horariosUsados.includes(entradaNumber) || horariosUsados.includes(saidaNumber)) {
            console.log(`Horario usado`);
            return true;
        } else {
            console.log('horario vago');
            return false;
        }
    }
    // 5 e 6 sabado e domingo


    async function aoSalvar(e) {
        e.preventDefault();
        const horaInicialNumber = Number(horaInicial);
        const horaFinalNumber = Number(horaFinal);

        const diaDaSemana = new Date(data);
        console.log(diaDaSemana);
        console.log(diaDaSemana.getDay());

        if (diaDaSemana.getDay() === 5 || diaDaSemana.getDay() === 6) {
            alert(`Não é possível agendar nos finais de semana!`)
        } else {
            if (horaInicialNumber === horaFinalNumber || horaFinalNumber < horaInicialNumber) {
                alert('Horário final não pode ser igual ou menor que horário inicial');
            } else {

                if (verificaHorario(horaInicial, horaFinal)) {
                    alert(`Horário não disponível, vefique horários vagos na tabela no topo do site`);

                } else { // false 
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

                    limpaCampos();
                    alert(`Agendamento realizado com sucesso!`);
                    window.scrollTo(0, 0);
                    e.target.reset();
                }

            }

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
                    horarios={horasEntrada}
                    valor={horaInicial}
                    aoAlterado={valor => setHoraInicial(valor)}
                />
                <CampoHorario
                    label="Horário final"
                    horarios={horasSaida}
                    valor={horaFinal}
                    aoAlterado={valor => setHoraFinal(valor)}
                />

                <BotaoEnviar>
                    Enviar
                </BotaoEnviar>
            </form>
        </section>
    )
}

export default Formulario;

