import React, {useContext}  from 'react';
import './invitation.css';
import {urlImg} from '../servicies/urls';
import {ThemeContext} from "../context/Theme/ThemeContext"


function Invitation(props) {
  const {theme, handleTheme} = useContext(ThemeContext);
  return (
    <>
      <div className="card m-4 mx-auto">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <img src={urlImg+props.src} alt={props.name} className={theme === 'oscuro' ? 'aux card-img-top': 'card-img-top' } />
        </div>
      </div>
    </>
    );
}

export default Invitation;
