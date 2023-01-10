import Name from '../../assets/images/jeffrey_koshy.png';
import { Link } from 'react-router-dom';
import Jeff from '../../assets/images/jeff.png';
import JK from '../../assets/images/jk_initials.png';
import './index.scss';


const Home = () => {

    return (
        <div className="container home-page">

            <div className="text-zone">
                <h1>Hi, 
                <br/> I'm 
                <img src={Jeff} alt= "developer" />
                Jeffrey
                <br />
                web developer
                </h1>
            <h2>Frontend Developer / JavaScript Expert / Backend Developer </h2>
            <Link to="/contact" className="flat-button" >CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home