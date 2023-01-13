import './index.scss';
import burger_express from '../../assets/images/burger_express.png'
import game_thrones from '../../assets/images/game_of_thrones.png'
import sports_discord from '../../assets/images/sports_discord.png'
import dev_hub from '../../assets/images/dev_hub.png'

const Projects = () => {
    return(
    <div className="github" >  
        <hi >
            Enjoy these projects below
            
            <div  >
                <h1 className='projects' >Dev Hub</h1>
                <a target="_blank" href="https://the-dev-hub.vercel.app/"><img className="web_shots" src={dev_hub}></img></a>
            </div>
            <div>
                <h1 className='projects' >Sports Discords</h1>
                <a target="_blank" href="https://project3-front-end.vercel.app/"  ><img className="web_shots" src={sports_discord}></img></a>

            </div>
            <div>
                <h1 className='projects' >Burger App</h1>
                <a target="_blank" href="https://mern-front-qlvy1gwus-koshy123.vercel.app/burgerView"><img className="web_shots" src={burger_express}></img></a>
            </div>
            <div>
                <h1 className='projects' >Game of Thrones</h1>
               <a target="_blank" href="https://game-of-thrones-medp.vercel.app/components/Quote"> <img className="web_shots" src={game_thrones}></img> </a>

            </div>

        </hi>
    </div>
    )
}

export default Projects
