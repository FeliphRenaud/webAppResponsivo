import {useEffect, useState} from 'react'

import './styles.css'
import menuIcon from '../../assets/menu.svg'
import closeIcon from '../../assets/close.svg'

function Menu(){
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        document.querySelector('body').style.overflow = 
        open ? 'hidden' : 'initial';
    }, [open]);
    return(
        <div className={`${open && 'fullscreen-menu'} `}>
            {open ?
                <img 
                    className='iconClose'
                    style={{display: `${open} ? 'block' : 'none'`}}
                    src={closeIcon} 
                    alt='close menu icon'
                    onClick={()=>setOpen(false)}
                />
                :
                <img 
                    className='iconMenu'
                    src={menuIcon} 
                    alt='menu icon'
                    onClick={()=> setOpen(true)}
                />    
            }
            
            
            <ul className='menu' >
                <li>Ação</li>
                <li>Comedia</li>
                <li>Drama</li>
                <li>Documentarios</li>
                <li>Infantil</li>
            </ul>
        </div>
    )
}

export default Menu;