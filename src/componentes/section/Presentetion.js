import styles from './Presentetion.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect,useState } from 'react'

function Presentation(){
    const[text,setText] = useState('')
    const toRotate = ['Rafael Moreira', 'Desenvolverdor Front End', 'Desenvolvedor Wordpress']
    const[loop,setLoop] = useState(0)
    const[isDelete, setIsDelete] = useState(false)
    const period = 100;
    const [delta, setDelta] = useState(100)


useEffect(()=>{
    let ticker = setInterval(()=>{
    toType()
    }, delta)
    return()=>{clearInterval(ticker)}
},[text])

const toType = ()=>{
    let i = loop% toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDelete? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)

    setText(updatedText);

    if(!isDelete && updatedText === fullText){
        setIsDelete(true)
        setDelta(period)

    }else if(isDelete && updatedText === ""){
        setIsDelete(false);
        setDelta(period);
        setLoop(loop+1);

    }
}

    return(
<div id="presentation" className={styles.presentation}>
<h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
<h1>Olá, Eu sou {text}</h1>
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