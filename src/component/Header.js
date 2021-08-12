import {NavLink} from "react-router-dom";
import s from './navlink.module.css'



export const Header = ()=>{

    return (
        <div className="header">
            <div className="header__seting">
                <div className="header__item haderlogo">
                    БНА
                </div>
                <div className="header__item"><NavLink className={s.link} to='/me'>о себе</NavLink></div>

            </div>
            <div className="header__seting">
                <div className="header__item"><p>Бурак Никита</p></div>
            </div>
        </div>
    )
}