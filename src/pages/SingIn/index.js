import './styles.css';
import { Link } from "react-router-dom";

export default function SingIn() {
  return (
    <div className='container'>
      <h1>Sing in</h1>
      <div>
        <Link to="/DashBoard">Entrar</Link>
        <Link to="/SingUp">Cadastrar-se</Link>
      </div>
    </div>
  );
}


