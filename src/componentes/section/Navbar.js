import  styles from './Navbar.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
<div className={styles.navbar}>
   <ul>

    <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
    <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
    <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>

   </ul>
   
   <ul>

    <li> <a href='https://www.instagram.com/raffgrunge/' target='in_blanck'><FaInstagram size={30}/></a> </li>
    <li> <a href='https://github.com/raffnb' target='in_blanck'><FaGithub size={30}/></a> </li>
    <li> <a href='https://www.linkedin.com/in/rafael-moreira-de-souza-2876b9187/' target='in_blanck'><FaLinkedin size={30}/></a></li>

   </ul>

</div>
    )
}

export default Navbar