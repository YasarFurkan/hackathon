import React, { Component, useContext, useEffect } from "react";
import { CluesContext } from "../Main";
const axios = require('axios');

/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/



const Clues = () => {
  var clues = useContext(CluesContext)
  return ( 
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <table>
        <tr>
          <th>id</th>
          <th>type wapen</th>
          <th>naam</th>
          <th>foto</th>
        </tr>
          <CluesContext.Consumer>{value => value.map(clue => 
          <tr>
            <td>{clue.id}</td>
            <td>{clue.type}</td>
            <td>{clue.title}</td>
            <td>{clue.image}</td>
            </tr>)}
          </CluesContext.Consumer>
      </table>
    </div>
  );
};

export default Clues;