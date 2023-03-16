import CardEquipamento from '../../components/CardEquipamento';
import styles from './Equipamentos.module.css';
import lego from '../../image/equipamentos/lego.jpg';
import notebook from '../../image/equipamentos/notebook.jpg';
import notebookDaten from '../../image/equipamentos/notebookDaten.jpg';
import impressoraGT from '../../image/equipamentos/impressoraGT.jpg';
import impressoraFinder from '../../image/equipamentos/impressoraFinder.jpg';
import scanner from '../../image/equipamentos/scanner.jpg';
import cnc from '../../image/equipamentos/cnc.jpg';


export default function Equipamentos() {
    return (
        <div className={styles.container}>
            <CardEquipamento
                label="Lego Spike Prime"
                quantidade="5"
                imagem={lego}
                descricao="Este dispositivo avançado, porém simples de usar,
                    em forma de bloco, possui 6 portas de entrada/saída, matriz de luz 5x5,
                    conectividade Bluetooth, um alto-falante, giroscópio de 6 eixos e uma bateria recarregável."                    
            />
            <CardEquipamento             
                label="Notebook Dell"
                quantidade="7" 
                imagem={notebook}
                descricao="O primeiro PC dobrável do mundo fecha como um livro ou se abre completamente
                    plano para exibição em tela inteira."

            />
            <CardEquipamento             
                label="Notebook Daten"
                quantidade="3" 
                imagem={notebookDaten}
                descricao="Daten é uma marca brasileira sediada na Bahia. Vem com processador Intel Core I3
                    e 4GB de memória RAM. O HD é de 1TB, mas a tela é a mesma de 14 polegadas com resolução HD.
                    Também possui Wi-Fi, bateria de 4800mAh, leitor de cartão e pesa 1,6Kg."
            />
            <CardEquipamento             
                label="Impressora 3D Gtmax3d core a1 v2"
                quantidade="2" 
                imagem={impressoraGT}
                descricao="É o último modelo da nossa linha standard, entregando maior volume de impressão
                    e mantendo a qualidade de uma profissional, entrega um acabamento mais refinado sendo
                    uma excelente opção para iniciar no mundo da impressão 3D"
            />
            <CardEquipamento             
                label="Impressora 3D Finder Flashforge"
                quantidade="1" 
                imagem={impressoraFinder}
                descricao="Com um painel sensível ao toque de 3,5 polegadas, detecção de entrada de filamentos,
                    pendrive USB e conexão Wi-Fi de 2ª geração, a Finder oferece uma excelente experiência de usuário
                    que qualquer outra impressora 3D não consegue"
            />
            <CardEquipamento             
                label="Scanner 3D Einscan SE"
                quantidade="1" 
                imagem={scanner}
                descricao="O scanner 3D Einscan-SE da empresa Shining 3D utiliza luz branca e faz digitalizações precisas em
                    segundos. Acompanha uma mesa giratória para facilitar a captura das informações em torno do modelo."
            />
            <CardEquipamento             
                label="Cnc a laser Delta"
                quantidade="1" 
                imagem={cnc}
                descricao="Modelo: L6040, potência do laser: 50 W, Laser: 10.000 horas de trabalho, area de trabalho: 600 X 400mm
                    chiller: bomba d’agua, tipo de mesa: colmeia, regulagem da mesa: automática, comunicação: Via USB, cabo de rede"
            />
        </div>
    )
}