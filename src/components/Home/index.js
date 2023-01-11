import Name from '../../assets/images/jeffrey_koshy.png';
import { Link } from 'react-router-dom';
import Jeff from '../../assets/images/jeff.png';
import JK from '../../assets/images/jk_initials.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','J','e','f','f','r','e','y']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000 )
    // }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>

                <br/>  
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                {/* <img src={Jeff} alt= "developer" /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15} />
                </h1>
            <h2>Frontend Developer / JavaScript Expert / Backend Developer </h2>
            <Link to="/contact" className="flat-button" >CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home