import logo from './assets/logo.svg';
import {useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
// @ts-ignore
import Invitations from './components/Invitations'
import {ThemeContext} from "./context/Theme/ThemeContext"

function App() {
  const {theme, handleTheme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={() => handleTheme('claro')}>Claro</button>
      <button onClick={() => handleTheme('oscuro')}>Oscuro</button>
      <Link to="/invitations">Invitaciones</Link>
      <Routes>
        <Route path="/invitations" element={<Invitations />} />
      </Routes>
    </div>
  )
}

export default App
