import { storage } from "db/agendamento";
import { getDownloadURL, getStorage, listAll, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react"

export default function AdminPraticasPedagogicas() {

    const [pdf, setPdf] = useState("");
    const [progress, setProgress] = useState(0);   

    const handleUpload = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0];
        if (!file) return

        const storageRef = ref(storage, `pdfs/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const Calcprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(Calcprogress)
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setPdf(url)
                })
            }
        )
    }
    
    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type="file" />
                <button type="submit"> Upload </button>
            </form>
            <br />
            <h2> Carregamento concluido % {progress}</h2>
            <br />            
        </div>
    )
}