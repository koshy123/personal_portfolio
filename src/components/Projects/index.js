import './index.scss';
import burger_express from '../../assets/images/burger_express.png'
import game_thrones from '../../assets/images/game_of_thrones.png'
import sports_discord from '../../assets/images/sports_discord.png'
import dev_hub from '../../assets/images/dev_hub.png'
import { Button } from 'react-bootstrap';

const Projects = () => {
    return (
        
        
        <div className="github" >
            <h1 className="projects_title"> Projects </h1>
            <div className='projects_list'>
                <div className='name_pic'  >
                    <h1 className='projects' >Dev-Hub</h1>
                    <img className="web_shots" src={dev_hub}></img>
                    <a target="_blank" href="https://the-dev-hub.vercel.app/"></a>                    
                    <p className='describe'>This group project utalized React.js</p>
                    <div className='buttons'>
                    <Button className='button' target="_blank" href="https://the-dev-hub.vercel.app/" >Live Link</Button>
                    <Button className='button' target="_blank" href="https://the-dev-hub.vercel.app/" >Live Link</Button>
                        </div>
                </div>
                <div className='name_pic'>
                    <h1 className='projects' >Sports Discords</h1>
                    <img className="web_shots" src={sports_discord}></img>
                    <a target="_blank" href="https://project3-front-end.vercel.app/"></a>
                    <p className='describe'>This group project utalized React.js</p>
                    <div className='buttons'>
                    <Button className='button' target="_blank" href="https://the-dev-hub.vercel.app/" >Live Link</Button>
                    <Button className='button' target="_blank" href="https://project3-front-end.vercel.app/" >Live Link</Button>
                        </div>
                </div>
                <div className='name_pic'>
                    <h1 className='projects' >Burger App</h1>
                    <img className="web_shots" src={burger_express}></img>
                    <a target="_blank" href="https://mern-front-qlvy1gwus-koshy123.vercel.app/burgerView"></a>
                    <p className='describe'>This group project utalized React.js</p>
                    <div className='buttons'>
                    <Button className='button' target="_blank" href="https://the-dev-hub.vercel.app/" >Live Link</Button>
                    <Button className='button' target="_blank" href="https://mern-front-qlvy1gwus-koshy123.vercel.app/burgerView" >Live Link</Button>
                        </div>
                </div>
                <div className='name_pic'>
                    <h1 className='projects' >Game of Thrones</h1>
                    <img className="web_shots" src={game_thrones}></img>
                    <a target="_blank" href="https://game-of-thrones-medp.vercel.app/components/Quote"></a>
                    <p className='describe'>This group project utalized React.js</p>
                    <div className='buttons'>
                    <Button className='button' target="_blank" href="https://the-dev-hub.vercel.app/" >Live Link</Button>
                    <Button className='button' target="_blank" href="https://game-of-thrones-medp.vercel.app/components/Quote" >Live Link</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
