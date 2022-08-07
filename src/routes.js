import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import NavBar from './components/navebar';
import DashBoard from './pages/Dashboard';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Usuarios from './pages/Usuarios';

function RotaProtegida({ redirecionarPara }) {
  const foiAutenticada = true;

  return foiAutenticada ? <Outlet /> : <Navigate to={redirecionarPara} />
}

function Main() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path='/'>

        <Route
          path='/'
          element={< SingIn />}
        />
        <Route
          path='/SingIn'
          element={< SingIn />}
        />

      </Route>

      <Route element={<RotaProtegida redirecionarPara='/SingIn' />}>
        <Route path="/DashBoard" element={<NavBar />}>
          <Route
            path=''
            element={
              <DashBoard
                count={count}
                setCount={setCount} />}
          />
        </Route>

        <Route path='/Usuarios' element={<NavBar />} >
          <Route path='' element={<Usuarios />} />
          <Route path=':id' element={<Usuarios />} />
        </Route>
      </Route>

      <Route
        path="/SingUp"
        element={<SingUp />}
      >
      </Route>

      <Route path='*' element={<h1>404 - Not Found</h1>} />
    </Routes>

  );
}

export default Main;
