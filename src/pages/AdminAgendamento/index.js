import { useState } from "react";
import styles from './AdminAgendamentos.module.css';
import AdminProfessorVisitante from "components/AdminVisitante";
import AdminAgendamentoLogado from "components/AdminAgendamentoLogado";

export default function AdminAgendamentos() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [autenticado, setAutenticado] = useState(false);

    function login(e) {
        e.preventDefault();
        const USUARIO_ADMIN = "admin";
        const SENHA_ADMIN = "labmaker"
        const visitante = { usuario, senha };

        if (visitante.usuario === USUARIO_ADMIN && visitante.senha === SENHA_ADMIN) {
            setAutenticado(true);
            alert(`Usuario logado!`)

        } else {
            alert(`Usuário e/ou senha errados!`);
            setAutenticado(false);
        }
    }

    return (
        <section className={styles.AdminAgendamentos}>
            {!autenticado ?
                <AdminProfessorVisitante
                    usuario={usuario}
                    setUsuario={setUsuario}
                    senha={senha}
                    setSenha={setSenha}
                    login={login}
                /> : <AdminAgendamentoLogado />
            }
        </section>
    )
}