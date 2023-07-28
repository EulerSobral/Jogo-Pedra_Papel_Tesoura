import React from "react"; 
import pedra from '../imgs/Pedra.png' 
import papel from '../imgs/Papel.png' 
import tesoura from '../imgs/Tesoura.png'

export default function Header(){ 
    return( 
        <header> 
            <ul className="menu-header"> 
                <li><img src={pedra} className="img-header"/></li> 
                <li><img src={papel} className="img-header"/></li> 
                <li><img src={tesoura} className="img-header"/></li>
            </ul>
        </header>
    )
}