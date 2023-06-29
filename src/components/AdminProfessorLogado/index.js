import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "db/agendamento";
import styles from './AdminProfessorLogado.module.css';
import BotaoUpload from "./BotaoUpload";


export default function AdminProfessorLogado() {

    const [pdf, setPdf] = useState("");
    const [progress, setProgress] = useState(0);

    const upload = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file) return;

        const storageRef = ref(storage, `pdfs/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const Calcprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(Calcprogress.toFixed(0));                                
            },
            error => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setPdf(url);
                    alert(`Arquivo enviado com sucesso!`);
                })                
            }
        )
    }      

    return(
        <section className={styles.AdminProfessorLogado}>            
            <h2> Área administrativa dos Professores. </h2>
            <form onSubmit={upload}>
                <input type="file" />
                <BotaoUpload>
                    Upload
                </BotaoUpload>                              
            </form>
            <br />
            <h3> Status do carregamento <strong> {progress}% </strong></h3>
            <br />                  
        </section>
    )
}