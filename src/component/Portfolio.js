import s from './navlink.module.css'
import {NavLink} from "react-router-dom";
import foto01 from './../foto/2021-08-12 (3).png'
import foto02 from './../foto/2021-08-12.png'
import foto03 from './../foto/2021-08-12 (5).png'
import foto04 from './../foto/2021-08-12 (6).png'
import foto05 from './../foto/2021-08-12 (7).png'


export const Portfolio = ()=>{

    return (<div><div className='portfolio'>
        <p><NavLink className={s.link2} to='/github'>Переход на мой GitHub</NavLink></p>
    </div>
         < div className={s.portfolio}>
             <div className={s.portfolioItems}>
                 <NavLink to='/interview'>
                     <img src={foto01}/>
                     <p>Большое приложение написано на TypeScript с React,<br/>
                         Пароли могу предоставить для дальнейшего просмотра</p>

                 </NavLink>

             </div>
             <div className={s.portfolioItems}>
                 <NavLink to='/sampleHTMLcode'>
                     <img src={foto02}/>
                     <p>Проект по HTML и CSS</p>
                 </NavLink>

             </div>
             <div className={s.portfolioItems}>
                 <NavLink to='/VkHTML'>
                     <img src={foto03}/>
                     <p>Demo vk:)</p>
                 </NavLink>
             </div>
             <div className={s.portfolioItems}>
                 <NavLink to='/gridPractiva'>
                     <img src={foto04}/>
                     <p>CSS и Grid с Адаптивной версткой</p>
                 </NavLink>

             </div>
             <div className={s.portfolioItems}>
                 <NavLink to='/SeaBattle'>
                     <img src={foto05}/>
                     <p>Игра на чистом JavaScript</p>
                 </NavLink>

             </div>
         </div>
        </div>
    )
}