import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import styles from './CardAreaConhecimento.module.css';
//
import firebase from 'firebase/app';
import 'firebase/storage';

export default function CardAreaConhecimento({ itens }) {

    const [pdfEscolhido, setPdfEscolhido] = useState("")
    const [todosPdf, setTodosPdf] = useState([]);
    const [caminhoPdf, setCaminhoPdf] = useState([]);

    useEffect(() => {

        const storage = getStorage();
        //const pathReference = ref(storage, 'pdfs/Acoplador direcional.pdf')


        

        //

        const listRef = ref(storage, "gs://lab-maker-agendamento.appspot.com/pdfs")

        const listaNomesPdfs = []
        const listaCaminhosPdfs = []


        listAll(listRef)
            .then((res => {
                res.prefixes.forEach((folderRef => {
                    //console.log(`Prefixes ${folderRef}`);
                }))
                res.items.forEach((itemRef => {
                    // caminho que passa pro download
                    //console.log(`Nome do arquivo: ${itemRef.name}`); 
                    listaNomesPdfs.push(itemRef.name)
                    setTodosPdf(listaNomesPdfs)
                    //

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
        //console.log(caminhoEncontrado);
        criaDownload(caminhoEncontrado)
       
    }

    function criaDownload(caminhoRecebido) {
        const storage = getStorage();

        getDownloadURL(ref(storage, caminhoRecebido))
            .then((url) => {
                const xhr = new XMLHttpRequest()
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                    //console.log(blob);
                }
                xhr.open('GET', url);
                xhr.send()
                baixarPdf(url)
                //setPdfEscolhido(url)

                

            })
    }

    let objetoPdf = {}

    for (let i = 0; i < todosPdf.length; i++) {
        objetoPdf = todosPdf[i]
    }

    //console.log(objetoPdf);


    return (
        <div className={styles.Conhecimento}>
           
            <ul>
                {caminhoPdf.map(pdf => (
                    <li>
                        <label onClick={() => pegaCaminho(pdf)}> {pdf} </label>                 
                    </li>
                    
                ))}
                
            </ul>
        </div>
    )
}

