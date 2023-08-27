import styles from './Skills.module.css'
import javascript from '../../image/skills/js-svgrepo-com.svg'
import css from '../../image/skills/css-3-svgrepo-com.svg'
import html from '../../image/skills/html-5-svgrepo-com.svg'
import react from '../../image/skills/react-svgrepo-com.svg'
import wordpress from '../../image/skills/wordpress-svgrepo-com.svg'


function Skills(){
    return(
        <div id="skills" className={styles.skill}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais Habilidades e Conhecimentos.</p>

            <div>
                <img src={html} />
                <img src={css} />
                <img src={wordpress} />
                <img src={javascript} />
                <img src={react} />
                
            </div>

        </div>
    )
}

export default Skills