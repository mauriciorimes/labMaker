import styles from './CardEquipamento.module.css';

export default function CardEquipamento({ label, quantidade, imagem, descricao }) {
    return (
        <section className={styles.cards}>
            <img src={imagem} alt={label} />
            <div>
                <label> Nome: {label} </label>
                <p> Descrição: {descricao} </p>
                <p> Quantidade: {quantidade} </p>                
            </div>
        </section>
    )
}
