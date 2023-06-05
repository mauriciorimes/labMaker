import CardEquipamento from 'components/CardEquipamento';
import styles from './Equipamentos.module.css';
import impressora from 'image/equipamentos/3d-printing.png';
import scanner from 'image/equipamentos/3d-scanner.png';
import lego from 'image/equipamentos/blocks.png';
import notebook from 'image/equipamentos/laptop.png';
import cortadora from 'image/equipamentos/laser-cutting-machine.png';

export default function Equipamentos() {
    return (
        <div className={styles.container}>
            <CardEquipamento
                label="Impressora 3D"
                quantidade="3"
                imagem={impressora}
                descricao="Tecnologia que permite criar objetos tridimensionais a partir de um desenho digital."                    
            />
            <CardEquipamento
                label="Scanner 3D"
                quantidade="1"
                imagem={scanner}
                descricao="Escaneia a forma espacial, estrutura e cor de um objeto para obter informações
                    sobre as coordenadas espaciais da superfície do objeto."                    
            />
            <CardEquipamento
                label="Cortadora a laser"
                quantidade="1"
                imagem={cortadora}
                descricao="É uma máquina que utiliza laser para cortar ou gravar diferentes materiais, como MDF, acrílico e tecido."                    
            />
            <CardEquipamento
                label="Lego Spike Prime"
                quantidade="5"
                imagem={lego}
                descricao="Dê vida ao aprendizado, confira os conceitos de ciência, engenharia e física em ação."                    
            />
            <CardEquipamento
                label="Notebook"
                quantidade="10"
                imagem={notebook}
                descricao="Pesquise, projete, documente suas descobertas. Use para aprimorar suas ideias!"                    
            />            
        </div>
    )
}