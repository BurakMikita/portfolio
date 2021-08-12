import img01 from './../img/01.jpg'
import img02 from './../img/02.jpg'
import img03 from './../img/03.jpg'
import img04 from './../img/04.jpg'
import img05 from './../img/05.jpg'
import img06 from './../img/06.jpg'
import img07 from './../img/07.jpg'
import img08 from './../img/08.jpg'
import img09 from './../img/09.jpg'
import img10 from './../img/10.jpg'
import s from './navlink.module.css'



import e from './navlink.module.css'

export const Galerea = ()=>{
    return (

            <div className={e.cards}>
              <img src={img01}/>
                <img src={img03}/>
                <img src={img04}/>
                <img src={img05}/>
                <img src={img07}/>
                <img src={img08}/>
                <img src={img09}/>
                <img src={img10}/>
            </div>
    )
}