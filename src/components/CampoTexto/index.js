import styles from './CampoTexto.module.css';

function CampoTexto({ label, placeholder, type, obrigatorio, minlength, valor, aoAlterado })  {     
    
    const aoDigitado = (e) => {
        aoAlterado(e.target.value)
    } 
    
    return (
        <div className={styles.campoTexto}>
            <label htmlFor={label}> {label} </label>
            <input                
                onChange={aoDigitado}
                value={valor}                
                placeholder={placeholder}
                required={obrigatorio}
                id={label}
                type={type} 
                minLength={minlength}                                                                    
            />
        </div>
    )
}

export default CampoTexto