import {NavLink, Route,Redirect} from "react-router-dom";
import s from './navlink.module.css'
import {Portfolio} from "./Portfolio";
import {AboutMe} from "./AboutMe";


export const NavBar = ()=>{

    return (
        <main>
            <div className="sidBaer">
                <div className="sidBaer__section">
                    <div className="sidBear__item"><NavLink to="/portfolio" activeClassName={s.activeLink}>Ссылка портфолио</NavLink></div>

                </div>
                <div className="sidBaer__section">

                </div>
            </div>
            <div className="wrap">
                <Route path='/portfolio'
                       render={() => <Portfolio/>}/>
                <Route path='/me'
                       render={() => <AboutMe/>}/>
                <Route path='/github' component={() => {
                    window.location.href = 'https://github.com/BurakMikita'
                }}/>
                <Route path='/interview' component={() => {
                    window.location.href = 'https://burakmikita.github.io/interview/'
                }}/>
                <Route path='/sampleHTMLcode' component={() => {
                    window.location.href = 'https://burakmikita.github.io/sampleHTMLcode/'
                }}/>
                <Route path='/VkHTML' component={() => {
                    window.location.href = 'https://burakmikita.github.io/VkHTML/'
                }}/>
                <Route path='/gridPractiva' component={() => {
                    window.location.href = 'https://burakmikita.github.io/gridPractiva/'
                }}/>
                <Route path='/SeaBattle' component={() => {
                    window.location.href = 'https://burakmikita.github.io/SeaBattle/'
                }}/>
                <Route exact path='/'
                       render={() => <Redirect to={"/portfolio"}/>}/>
            </div>
        </main>
    )
}



