import styles from './AdminProfessorVisitante.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import BotaoLogin from './BotaoLogin';

export default function AdminVisitante({ usuario, setUsuario, senha, setSenha, login }) {
    return (
        <div className={styles.AdminProfessorVisitante}>
            <h2> Insira o usuário e senha para proseguir: </h2>
            <form onSubmit={login}>
                <div>
                    <AccountCircleIcon fontSize='large' className={styles.Icone}/>                    
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div>
                    <LockIcon fontSize='large' className={styles.Icone}/>                    
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <BotaoLogin>
                    Login
                </BotaoLogin>
            </form>
        </div>
    )
}