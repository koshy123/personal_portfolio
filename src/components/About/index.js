import './index.scss'
import self from '../../assets/images/self.jpg'
import css from '../../assets/images/css.png'
import html from '../../assets/images/html5.png'
import javscript from '../../assets/images/javscript.jpeg'
import DevIcon from "devicon-react-svg";

const About = () => {

    return (
        <div className='about-layout' >
            <div className='text-zone page'>
                <h1 className='title'>
                    About
                </h1>
                <img className="self" src={self} ></img>
                <p className="about">
                    I am ambitious, curious and excited for new adventures.

                </p>
                <p className="about">
                    Software stuck out to me because of the power it has to change many lives. It can help companies run more efficent or give an individual tools to make their day to daily life easier.
                </p>
                <p className="about">
                    With the toolbelt I have, I plan to give my all to any project I work on.
                </p>
                <div className='skills'>
                    <h1 className='title'>Skills</h1>
                    <div className='skill_layout'>
                        <DevIcon width="10%"  icon="react"></DevIcon>
                        <img width="10%"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                        <img  width="10%"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                        <img  width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                        <img  width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                        <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                        <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>
                        <img width="10%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                    </div>

                </div>
            </div>

        </div>
    )
}


export default About