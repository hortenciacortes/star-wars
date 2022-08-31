import logo from '../../assets/logo.png';
import login from '../../assets/login.svg';
import './styles.css'

export function Header() {
  return (
    <header className='grid-pattern'>
      <div className='container'>
        <a href="/">
          <img 
            className='logo'
            src={logo} alt="Logo amarelo Star Wars" 
          />
        </a>
        
        <a href="/" className='login'>
          Login 
          <img src={login} alt="Seta amarela sugerindo uma entrada (login)" />
        </a>
      </div>
    </header>
  )
}