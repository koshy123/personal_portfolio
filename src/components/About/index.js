import './index.scss'
import self from '../../assets/images/self.jpg'
import css from '../../assets/images/css.png'
import html from '../../assets/images/html5.png'
import javscript from '../../assets/images/javascript.png'

const About = () => {
     
    return(
        <div className='about-layout' >
            <div className='text-zone page'>   
            <h1 className='title'>
                About
            </h1>
            <img className="self" src={self} ></img>
            <div className='skills'>
            <h1 className='title'>Skills</h1>
            <img src={css}></img>
            <img src={html}></img>
            <img src={javscript}></img>

            </div>
            <p className="about">
                I am ambitious, curious and excited for new adventures. 

            </p>
            <p className="about">
            Software stuck out to me because of the power it has to change many lives. It can help companies run more efficent or give an individual tools to make their day to daily life easier.
            </p>
            <p className="about">
            With the toolbelt I have, I plan to give my all to any project I work on.
            </p>
            </div>

        </div>
    )
}


export default About