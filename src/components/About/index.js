import './index.scss'
import self from '../../assets/images/self.jpg'

const About = () => {
     
    return(
        <div className='contrainer about-page'>
            <div className='text-zone'>
                <img className="self" src={self} ></img>
            <h1>
                About
            </h1>

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