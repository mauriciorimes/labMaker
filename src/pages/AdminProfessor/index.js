import { useState } from "react";
import styles from './AdminProfessor.module.css';
import AdminVisitante from "components/AdminVisitante";
import AdminProfessorLogado from "components/AdminProfessorLogado";

export default function AdminProfessor() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [autenticado, setAutenticado] = useState(false);

    function login(e) {
        e.preventDefault();
        const USUARIO_PROFESSOR = "professor";
        const SENHA_PROFESSOR = "instituto"
        const visitante = { usuario, senha }

        if (visitante.usuario === USUARIO_PROFESSOR && visitante.senha === SENHA_PROFESSOR) {
            setAutenticado(true)
            alert(`Usuario logado!`)

        } else {
            alert(`Usuário e/ou senha errados!`)
            setAutenticado(false)
        }
    }

    return (
        <section className={styles.AdminProfessor}>
            {!autenticado ?
                <AdminVisitante
                    usuario={usuario}
                    setUsuario={setUsuario}
                    senha={senha}
                    setSenha={setSenha}
                    login={login}
                />
                : <AdminProfessorLogado />
            }
        </section>
    )
}