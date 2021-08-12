import {useState} from "react";
import s from './navlink.module.css'
import {Galerea} from "./Galerea";
import { Button } from 'antd';


export const AboutMe = ()=>{

       let [value, setValue] =  useState(true)



return(<div>
    <div className='portfolio'>
        {value ? <Button onClick={()=>setValue(false)} type="primary" size={46}>
                Информация
            </Button>
        : <div  className={s.modal}>
            <div className={s.modalBody}>
            <h1>Меня зовут: Никита Бурак</h1>
            <p>Вредных привычек не имею,
                с хорошим чувством юмора, коммуникабельный, целеустремленный,
                исполнительный. Довожу дело до конца, сколько бы усилий мне не стоило приложить - этому свойству я научился в спорте и программировании. Разносторонне развит, но всегда люблю открывать для себя что-то новое и всегда благодарен, кто мне помогает в этом.</p>
                <Button danger onClick={()=>setValue(true)}>Назад</Button>
            </div>
           </div>
        }
    </div>
        <Galerea/>
    </div>

)

}