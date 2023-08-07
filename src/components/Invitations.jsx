import React, { useState, useEffec } from 'react';
import Invitation from './Invitation';
import {urlApi} from '../servicies/urls';
import useFetch from '../hooks/useFetch';

function Invitations() {
  
  const [q, setQ] = useState("");
  const [searchParam] = useState(['nombre']);
  const [filterParam, setFilterParam] = useState(["all"]);

  const response = useFetch(urlApi, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        if (filterParam == "all") {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        } else {
          let group = item.groups.filter((g) => {
            return g.invitationgroup.nombre === filterParam;
          });
          if (group.length > 0) {
            return (
              item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
            );
          }
        }
      });
    });
  }

  function makeSelect(items) {
      const select = document.querySelector('select');
      const groups = [];
      items.forEach((item) => {
        item.groups.forEach((g) => {
          if (!groups.includes(g.invitationgroup.nombre)) {
            groups.push(g.invitationgroup.nombre);
          }
        })
      });
      groups.forEach((group) => {
        const option = document.createElement('option');
        option.value = group;
        option.innerHTML = group;
        select.appendChild(option);
      });
  }

  return (
    <div>
      <h1>Invitaciones</h1>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="form-control ds-input search-input"
        placeholder="Buscar..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <br/>
      <select name="select" className="form-select" onChange={(e) => {setFilterParam(e.target.value);}}>
        <option value="all" defaultValue>Todas</option>
      </select>
    
      <div className="container-flex d-flex flex-wrap align-items-center">
        {response.data && search(response.data).map((d, i) => (
          <Invitation src={d.invitationimg[0].src} name={d.nombre} key={i} />
        ))}
        {response.data && makeSelect(response.data)}
      </div>
    </div>
  );
}

export default Invitations;
