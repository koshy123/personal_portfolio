import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div>
    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'/>
        <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname='active' to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about " >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"  >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
    <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href='https://github.com/koshy123'
            >
                <FontAwesomeIcon icon={faGithub} color= '#4d4d4e' />
            </a>
        </li>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href='https://www.linkedin.com/in/jeffrey-koshy/'
            >
                <FontAwesomeIcon icon={faLinkedinIn} color= '#4d4d4e' />
            </a>
        </li>
    </ul>


    </div>
)

export default Sidebar