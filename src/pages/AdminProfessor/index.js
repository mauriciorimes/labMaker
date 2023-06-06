import { storage } from "db/agendamento";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import styles from './AdminProfessor.module.css';
import BotaoUpload from "./BotaoUpload";

export default function AdminProfessor() {

    const [pdf, setPdf] = useState("");
    const [progress, setProgress] = useState(0);   

    const upload = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file) return

        const storageRef = ref(storage, `pdfs/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const Calcprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(Calcprogress.toFixed(0))                                
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setPdf(url)
                    alert(`Arquivo enviado com sucesso!`);
                })                
            }
        )
    }
    
    return (
        <section className={styles.AdminProfessor}>
            <h2> Área administrativa dos Professores. </h2>
            <form onSubmit={upload}>
                <input type="file" />
                <BotaoUpload>
                    Upload
                </BotaoUpload>                              
            </form>
            <br />
            <h3> Status do carregamento {progress}%</h3>
            <br />            
        </section>
    )
}