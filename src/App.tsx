import logo from './assets/logo.svg';
import {useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Invitations from './components/Invitations';
import { ThemeContext } from "./context/theme/themeContext";

  function App() {
    const { theme, handleTheme } = useContext(ThemeContext);
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
