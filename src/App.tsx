import logo from './assets/logo.svg';
import { Link, Route, Routes } from 'react-router-dom'
// @ts-ignore
import Invitations from './components/Invitations'

function App() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/invitations">Invitaciones</Link>
      <Routes>
        <Route path="/invitations" element={<Invitations />} />
      </Routes>
    </>
  )
}

export default App
