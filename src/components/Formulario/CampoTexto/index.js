import styles from "./CampoTexto.module.css";

export default function CampoTexto({ label, placeholder, type, obrigatorio, minlength, valor, aoAlterado, min })  {    
    const aoDigitado = (e) => {
        aoAlterado(e.target.value);
    }    
    
    return (
        <div className={styles.CampoTexto}>
            <label htmlFor={label}> {label} </label>
            <input                
                onChange={aoDigitado}
                value={valor}                
                placeholder={placeholder}
                required={obrigatorio}
                id={label}
                type={type} 
                minLength={minlength}
                min={min}
            />
        </div>
    )
}