import styles from "./CardEquipamento.module.css";

export default function ListaDeEquipamentos({ label, quantidade, imagem, descricao }) { 
    return (
        <section className={`${styles.CardEquipamento}`}>
            <img src={imagem} alt={label} />
            <div>
                <label> {label} </label>
                <p> Quantidade: {quantidade} </p>                
                <p className={styles.descricao}> {descricao} </p>                                                  
            </div>
        </section>
    )
}
