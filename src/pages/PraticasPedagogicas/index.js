import CardPraticasPedagogicas from 'components/CardPraticasPedagogicas';
import styles from './PraticasPedagogicas.module.css';
import conhecimento from 'image/praticas/conhecimento.png'

export default function PraticasPedagogicas() {
    return(
        <section className={styles.container}>
            <CardPraticasPedagogicas
                titulo="A ideia por trás do LabMaker"                
                alt="Conhecimento"
                imagem={conhecimento}
                descricao="O laboratório Maker irá ajudar a aprofundar conhecimentos que os alunos
                    aprendem em sala de aula, sendo de interesse da comunidade aumentar esses conhecimentos
                    de diferentes formas, utilizando o laboratório."             
            />            
        </section>
        
    )
}