import BotaoUpload from '../BotaoUpload';
import styles from './AdminProfessorVisitante.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export default function AdminProfessorVisitante({ usuario, setUsuario, senha, setSenha, login }) {
    return (
        <div className={styles.AdminProfessorVisitante}>
            <h2> Insira o usuário e senha para proseguir: </h2>
            <form onSubmit={login}>
                <div>
                    <AccountCircleIcon fontSize='large'/>                    
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div>
                    <LockIcon fontSize='large'/>                    
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <BotaoUpload>
                    Login
                </BotaoUpload>
            </form>
        </div>
    )
}