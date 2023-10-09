import './styles.css'
import Logo from '../../assets/logo.svg'
import Menu from '../Menu/Menu'
 
function Header (){
    return(
        <header>
            <img
            className='logo' 
            src={Logo} 
            alt='Logo'/>

            <Menu/>
            
        </header>
        
    )
}

export default Header