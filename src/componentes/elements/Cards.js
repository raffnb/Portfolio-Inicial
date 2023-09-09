import { useState } from 'react'
import styles from '../elements/Cards.module.css'
import ButtonB from './ButtonB'



function Cards({img,title,tech,description,repo,site}){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }


    return(
<div className={styles.cards} onMouseLeave={InfoOff}>
    <a onMouseEnter={InfoOn}  href={site}>

    <img src= {img} alt='img'/>

    </a>
    {info === true &&(
        <section>
        <h3>{title}</h3>
        <p><strong>Tecnologia: </strong>{tech}</p>
        <p>{description} </p>
        <ButtonB text={'Acesse o Repositório'} link={repo}/>
        </section>

    )}
    
</div>
    )
}
export default Cards