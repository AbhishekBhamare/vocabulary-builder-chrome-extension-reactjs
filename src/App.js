import React, { useEffect, useState } from 'react';

import Divider from '@material-ui/core/Divider'
import { WORD_LIST } from './WordList';
import { KEY } from './Key';
import './App.css';

function App() {
  const [newData, setNewData] = useState([]);
  // let temp=0, key, x, data;
  // const getRandomKey = () => {
  //   temp = Math.floor(Math.random() * KEY.length);
  // }

  // let arr = [];
  // const getRandomValue = () => {
  //   getRandomKey();
  //   key = KEY[temp];
  //   console.log(KEY[temp]);
  //   for(let i in WORD_LIST[0][key]){
  //     arr.push(i);
  //   }
  // }

  // const getValue = () => {
  //   getRandomValue();
  //   const temp = Math.floor(Math.random() * arr.length)
  //   x = arr[temp];
  // }
  // let eg = '';
  // const getData = () => {
  //   getValue();
  //   data = WORD_LIST[0][key][x];
  //   x = x.toUpperCase(); 
  //   console.log(data) 
  //   eg = data['meaning_1'];
  //   eg.charAt(0).toUpperCase();  
  //   console.log("this-",eg);
  //   console.log("ottis",data['meaning_1']);
  // }
  // getData();
  let arr = [],rnd1,rnd2,key,val,eg,data;
  useEffect(() => {
    arr = [];
    rnd1 = Math.floor(Math.random() * KEY.length);
    key = KEY[rnd1];
    console.log(KEY[rnd1]);
    for(let i in WORD_LIST[0][key]){
      arr.push(i);
    }

    rnd2 = Math.floor(Math.random() * arr.length);
    val = arr[rnd2];
    eg = '';
    data = WORD_LIST[0][key][val];
    val = val.toUpperCase();
    setNewData(data);
  }, [newData]);

  // const load = event => {
  //   event.preventDefault();
  //   window.location.reload();
  // }
  return (
    <React.Fragment>
     <div className="modal">
       <h1>{val}</h1>
       <h2>{eg}</h2>
       <Divider/>
       <h2>MNEMONICS</h2>
       <div className="p"><p>{newData['mnemonic_1']}</p></div>
       <p>{newData['mnemonic_2']}</p>
       <p>{newData['mnemonic_3']}</p>
       <p>{newData['mnemonic_4']}</p>
     </div>
     {/* <div className="btn">
         <button onClick={load}>Next</button>
     </div> */}
    </React.Fragment>
  );
}

export default App;
