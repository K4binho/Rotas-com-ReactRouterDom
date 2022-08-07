import './styles.css';
import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <div className='container'>
      <h1>Sing Up</h1>
      <div>
        <Link to="/SingIn">Fazer login</Link>
      </div>
    </div>
  );
}


