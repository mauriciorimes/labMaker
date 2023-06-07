import { useState } from "react";
import styles from './AdminProfessor.module.css';
import AdminProfessorLogado from "components/AdminProfessor/AdminProfessorLogado";
import AdminProfessorVisitante from "components/AdminProfessor/AdminProfessorVisitante";

export default function AdminProfessor() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [autenticado, setAutenticado] = useState(false);

    function login(e) {
        e.preventDefault();
        const USUARIO_PROFESSOR = "professor";
        const SENHA_PROFESSOR = "iff"
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
                <AdminProfessorVisitante
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