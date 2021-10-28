import React from 'react';

import Divider from '@material-ui/core/Divider'
import { WORD_LIST } from './WordList';
import { KEY } from './Key';
import './App.css';

function App() {
  let temp=0, key, x, data;
  const getRandomKey = () => {
    temp = Math.floor(Math.random() * KEY.length);
  }

  let arr = [];
  const getRandomValue = () => {
    getRandomKey();
    key = KEY[temp];
    for(let i in WORD_LIST[0][key]){
      arr.push(i);
    }
  }

  const getValue = () => {
    getRandomValue();
    const temp = Math.floor(Math.random() * arr.length)
    x = arr[temp];
  }
  let eg = '';
  const getData = () => {
    getValue();
    data = WORD_LIST[0][key][x];
    x = x.toUpperCase(); 
    eg = data['meaning_1'];
    eg.charAt(0).toUpperCase();  
    
  }
  getData();


  const load = event => {
    event.preventDefault();
    window.location.reload();
  }
  return (
    <React.Fragment>
     <div className="modal">
       <h1>{x}</h1>
       <h2>{eg}</h2>
       <Divider/>
       <h2>MNEMONICS</h2>
       <div className="p"><p>{data['mnemonic_1']}</p></div>
       <p>{data['mnemonic_2']}</p>
       <p>{data['mnemonic_3']}</p>
       <p>{data['mnemonic_4']}</p>
       <div className="btn">
         <button onClick={load}>Next</button>
     </div>
     </div>
    </React.Fragment>
  );
}

export default App;
