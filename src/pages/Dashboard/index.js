import './styles.css';

export default function DashBoard({ count, setCount }) {

  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}


