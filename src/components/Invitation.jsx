import React from 'react';
import './invitation.css';
import {urlImg} from '../servicies/urls';

function Invitation(props) {
  return (
    <>
      <div className="card m-4 mx-auto">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <img src={urlImg+props.src} alt={props.name} className="card-img-top" />
        </div>
      </div>
    </>
    );
}

export default Invitation;
