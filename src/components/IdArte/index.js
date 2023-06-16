import styles from './IdArte.module.css';
import people from 'image/id/people.png';

export default function IdArte({ usuarioEncontrado, nome }) {

    const nomeRecebido = [...new Set(nome.map(n => n.nome))];

    function reverseString(str) {
        return str.split('-').reverse().join('/');
    }

    return (
        <div>
            {nomeRecebido.length > 0 ? <section className={styles.IdArte}>
                {nome.map(nome => (
                    <div>
                        <img src={people} alt='people' />
                        <h2> {nome} </h2>
                        <h3> VISITANTE </h3>
                    </div>
                ))}
                {usuarioEncontrado.map(usuario => (
                    <div>
                        <ul>
                            <li> Data: {reverseString(usuario.data)} </li>
                            <li> Horário: de {usuario.horaInicial}:00 às {usuario.horaFinal}:00 </li>
                        </ul>
                    </div>
                ))}
            </section> : ''}
        </div>
























    )
}