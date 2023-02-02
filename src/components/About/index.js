import './index.scss'
import self from '../../assets/images/self.jpg'
import DevIcon from "devicon-react-svg";

const About = () => {


    return (
        <div className='about-layout' >
            <div >
                <h1 className='title'>
                    About
                </h1>
                <img  src={self} ></img>
                <p className="about">
                    I am curious and excited for new challenges and opportunities.

                </p>
                <p className="about">
                    With software development I can help companies or individuals improve their daily lives.
                </p>
                <p className="about">
                    My family, friends motivate me to work harder and inspire me.
                </p>
                <p className="about">
                Some topics that interest me are Sports, History and Anthropology.  
                </p>

                <div >
                    <h1 className='title'>Skills</h1>
                    <div className='skill_layout'>
                        <DevIcon className='skill_image' icon="react"></DevIcon>
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>
                        <img className='skill_image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                    </div>

                </div>
            </div>

        </div>
    )
}


export default About