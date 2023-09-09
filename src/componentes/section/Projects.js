import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Cards from '../elements/Cards'
import ccxp from '../../image/projects/ccxp.png'
import gesseduca from '../../image/projects/gesseduca.png'
import sampa from '../../image/projects/sampa.png'
import pokedexImg from '../../image/projects/pokedexImg.png'

function Projects(){
    return(
        <div id="projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Cards
            img = {ccxp}
            title = 'CCXP - DNC'
            tech = 'HTML, CSS e JAVASCRIPT'
            description = 'Landing Page da CCXP, para melhorar meu conhecimento e realizar interações com o DOM  em Javascript.'
            repo = 'https://github.com/raffnb/landingPageCCXP2022/tree/main'
            site = 'https://landing-page-ccxp-2022.vercel.app/'
            />

            <Cards
            img = {gesseduca}
            title = 'BLOG - GESSEDUCA'
            tech = 'WORDPRESS, HTML e CSS'
            description = 'Blog para ajudar os professores com atividades escolares, noticias e conhecimentos sobre grandes nomes da educação.'
            repo = 'https://github.com/raffnb/Gesseduca/tree/main'
            site = 'https://gesseduca.com/'
            />

            <Cards
            img = {sampa}
            title = 'SITE - SAMPA'
            tech = 'HTML, CSS, WORDPRESS'
            description = 'Site de E-commerce, foi um projeto realizado durante o curso de Wordpress feito pela Udemy'
            repo = 'https://github.com/raffnb/Site---Sampa'
            site = 'https://dev-raffnbsampa.pantheonsite.io/'
            />
    

            <Cards
            img = {pokedexImg}
            title = 'SITE - POKEDÉX'
            tech = 'HTML, CSS, JAVASCRIPT'
            description = 'Pokedéx com informações Básicas sobre o mundo de Pokemon, para melhorar meu desenvolvimento com a interação com API'
            repo = 'https://github.com/raffnb/Pokedex'
            site = 'https://pokedex-api-eight-phi.vercel.app/'
            />


            <ButtonB text={'Acesse meu Repositório'} link={'https://github.com/raffnb?tab=repositories'}/>
    
        </div>
        
    )
}

export default Projects