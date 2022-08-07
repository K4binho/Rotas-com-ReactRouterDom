import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

export default function Usuarios() {
  const { id } = useParams();

  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'Matheus' },
    { id: 2, nome: 'Maria' }
  ]);

  function retornaNomeDoUsuario() {
    const currentUser = usuarios.find((usuario) => usuario.id === parseInt(id, 10));
    return currentUser.nome;
  }

  return (
    <div className='container'>
      <h2>Usuarios</h2>
      {!id ?
        <div className='contante-users'>
          {usuarios.map((usuario) => (
            <strong key={usuario.id}>{usuario.nome}</strong>
          ))}
        </div>
        :
        <strong>{retornaNomeDoUsuario()}</strong>
      }
    </div >
  );
}


