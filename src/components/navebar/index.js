import { Link, Outlet, NavLink } from 'react-router-dom';
import './styles.css';

export default function NavBar() {

  //const caminhoAtual = window.location.pathname;
  //className={caminhoAtual === '/Usuarios' ? 'linkSelecionado' : ''}
  return (
    <div className='container-nav'>
      <nav className='container-nav-bar'>
        <div className='content-links'>

          <NavLink
            //quando o botao estiver ativado muda a cor
            className={({ isActive }) => isActive ? "linkSelecionado" : ""}
            to='/DashBoard'
          >
            <h2>DashBoard</h2>
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "linkSelecionado" : ""}
            to="/Usuarios"
          >
            Usuarios
          </NavLink>

        </div>
        <Link to="/SingIn">Exit</Link>
      </nav >
      <div className='content-page'>
        <Outlet />
      </div>
    </div >
  );
}