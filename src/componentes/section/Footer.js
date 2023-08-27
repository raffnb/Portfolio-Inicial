import styles from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
               <ul>
<li> <a href='https://www.instagram.com/raffgrunge/' target='in_blanck'><FaInstagram size={30}/></a> </li>
<li> <a href='https://github.com/raffnb' target='in_blanck'><FaGithub size={30}/></a> </li>
<li> <a href='https://www.linkedin.com/in/rafael-moreira-de-souza-2876b9187/' target='in_blanck'><FaLinkedin size={30}/></a></li>
</ul>
<p>raffnb@gmail.com</p>
<p>Rafael Moreira @2023</p>

        </div>
    )
}

export default Footer