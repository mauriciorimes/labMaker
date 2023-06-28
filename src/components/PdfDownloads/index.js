import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import styles from './PdfDownloads.module.css';
import 'firebase/storage';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function PdfDownloads() {

    const [caminhoPdf, setCaminhoPdf] = useState([]);

    useEffect(() => {

        const storage = getStorage();
        const listRef = ref(storage, "gs://lab-maker-agendamento.appspot.com/pdfs")
        const listaCaminhosPdfs = []

        listAll(listRef)
            .then((res => {
                res.items.forEach((itemRef => {
                    listaCaminhosPdfs.push(itemRef.fullPath)
                    setCaminhoPdf(listaCaminhosPdfs)
                }))
            }))

    }, [])

    function baixarPdf(url) {
        window.open(url)
    }

    function pegaCaminho(caminho) {
        const caminhoEncontrado = caminho;
        criaDownload(caminhoEncontrado)
    }

    function criaDownload(caminhoRecebido) {
        const storage = getStorage();

        getDownloadURL(ref(storage, caminhoRecebido))
            .then((url) => {
                const xhr = new XMLHttpRequest()
                xhr.responseType = 'blob';
                xhr.open('GET', url);
                xhr.send()
                baixarPdf(url)
            })
    }

    return (
        <section className={styles.Conhecimento}>
            <ul>
                {caminhoPdf.map(pdf => (
                    <li onClick={() => pegaCaminho(pdf)}> 
                        <FileDownloadIcon fontSize="large" className={styles.Icone}/>
                        <label > {pdf.slice(5).slice(0, -4)} </label>
                    </li>
                ))}

            </ul>
        </section>
    )
}

