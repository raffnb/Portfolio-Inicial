import styles from './Presentetion.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
<div id="presentation" className={styles.presentation}>
<h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
<h1>Olá, Eu sou Rafael Moreira</h1>
<p>Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
Como desenvolvedor web, eu tenho o compromisso de construir sites <br/>
e conseguir dar a melhor experiência para o cliente e assim trazer resultados.<br/>
Estou sempre em busca de novos desafios.
</p>
<ButtonA text={'Conecte-se comigo!'} link={'https://github.com/raffnb'} />


</div>
    )
}

export default Presentation