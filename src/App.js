import React, { useState } from "react";
import {Button,Typography} from '@mui/material'; 

function App() {
  const [word,setWord] = useState(0);
  const [history,setHistory] = useState('');
  const [presentW,setpresentW] = useState('');
  const Result=()=>{
    let array = word.split(" ");
    console.log(array);
    let i = 1;
    let result = parseInt(array[0]);
    while( i < array.length)
    {
      if(array[i]!='+' && array[i]!='-' && array[i]!='*' && array[i]!='/')
      {
        array[i] = parseInt(array[i]);
        if(array[i-1] == '+')
        {
          result +=array[i]
        }
        else if(array[i-1] == '-')
        {
          result -=array[i]
        }
        
        else if(array[i-1] == '*')
        {
          result *=array[i]
        }
        
        else if(array[i-1] == '/')
        {
          result /=array[i]
        } 
      }
      
      i = i + 1;
    }
    setpresentW('Ans: ');
    setHistory( word);
    setWord(result);
    
  }
  return (
    <div style={{display:'flex',flex:1,justifyContent:'center', alignItems:'center',height:'100vh', flexDirection:'column'}}>
      <Typography variant="h5" component="h5" style={{margin:20, fontFamily:'fantasy', fontStyle:'italic', textDecoration:'underline', color:'#1976d2'}}>Senju's Calc</Typography>
      <div style={{ borderStyle:'solid', borderColor:'#1976d2', padding:20}}>
      <Typography variant="h6" component="h6" style={{textAlign:'right', margin:10}}>{history}</Typography>
      <Typography variant="h6" component="h6" style={{textAlign:'right', margin:10}}>{presentW}{word}</Typography>
      <div style={{flexDirection:'row',margin:10}}>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('1') :setWord(word+'1'),setpresentW(" ")]}>1</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('2') :setWord(word+'2'), setpresentW(" ")]}>2</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('3') :setWord(word+'3'), setpresentW(" ")]}>3</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[setWord(word+' + '), setpresentW(" ")]}>+</Button>
      </div>

      <div style={{flexDirection:'row',margin:10}}>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('4') :setWord(word+'4'), setpresentW(" ")]}>4</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('5') :setWord(word+'5'), setpresentW(" ")]}>5</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('6') :setWord(word+'6'), setpresentW(" ")]}>6</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[setWord(word+' - '), setpresentW(" ")]}>-</Button>
      </div>

      <div style={{flexDirection:'row',margin:10}}>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('7') :setWord(word+'7'), setpresentW(" ")]}>7</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('8') :setWord(word+'8'), setpresentW(" ")]}>8</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('9') :setWord(word+'9'), setpresentW(" ")]}>9</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[setWord(word+' * '), setpresentW(" ")]}>*</Button>
      </div>
      <div  style={{flexDirection:'row',margin:10}}>
      <Button variant="contained" style={{margin:5}} onClick={()=>[word == 0 ? setWord('0') :setWord(word+'0'), setpresentW(" ")]}>0</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>[setWord(0), setpresentW(" "), setHistory(" ")]}>ESC</Button>
      <Button variant="contained" style={{margin:5}} onClick={()=>Result(word)}>=</Button>    
      <Button variant="contained" style={{margin:5}} onClick={()=>[setWord(word+' / '), setpresentW(" ")]}>/</Button>
      </div>
      </div>
    </div>
  );
}

export default App;
