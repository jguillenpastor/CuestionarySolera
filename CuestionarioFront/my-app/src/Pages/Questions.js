import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";

import { useEffect, useState } from "react";
import Pregunta1 from "./Preguntas/Pregunta1";
import Pregunta2 from "./Preguntas/Pregunta2";
import Pregunta3 from "./Preguntas/Pregunta3";

const preguntas0= [
  {
    id:1,
    txtPregunta: "Pregunta 1?",
    tipo:1
  },
  {
    id:2,
    txtPregunta: "Pregunta 2?",
    tipo:2
  },
  {
    id:3,
    txtPregunta: "Pregunta 3?",
    tipo:2
  },
  {
    id:4,
    txtPregunta: "Pregunta 4?",
    tipo:3
  },
  {
    id:5,
    txtPregunta: "Pregunta 5?",
    tipo:1
  },
  {
    id:6,
    txtPregunta: "Pregunta 6?",
    tipo:1
  },
  {
    id:7,
    txtPregunta: "Pregunta 7?",
    tipo:3
  },
  {
    id:8,
    txtPregunta: "Pregunta 8?",
    tipo:2
  },
  {
    id:9,
    txtPregunta: "Pregunta 9?",
    tipo:1
  },
  {
    id:10,
    txtPregunta: "Pregunta 10?",
    tipo:3
  },
]



function Questions() {
  let navigate = useNavigate();

  const [index,setIndex]=useState(0)
  const [buttonName,setbuttonName]=useState("Next>")
  const [preguntas,setPreguntas]=useState(preguntas0)

  useEffect(()=>{
    fetch("https://localhost:7235/api/Cuestionario/get")
    .then(res=>res.json())
    .then((result)=>{
    setPreguntas(result);
    //console.log(result)
     })
  
  },[])

  const handleClick=()=>{
    if(preguntas.length-2==index){
      console.log("Submit")
      setbuttonName("Submit")
    }
    if(index+1<preguntas.length){
      setIndex(index+1)
    }else{
      navigate("/formcompleted")
    }
  }    
    
  if(preguntas[index].tipo==1){//
    return (
      <div >
        <Paper
          style={{display: "flex",margin: "10px auto",padding: "20px 15px",width: 800,height: "auto",flexWrap: "wrap",textAlign: "center",flexDirection: "column",}}>
          {
              preguntas.filter(item=>item.id==index+1).map(item=>(
                <div key={item.id}>
                  <h2 id={item.id}>Pregunta { preguntas[index].id}</h2>
                  <p>{preguntas[index].txtPregunta}</p>
                </div>
              ))

          }
          <Pregunta1 id={index+1}></Pregunta1>
          <div style={{textAlign: "end"}}>
            <Button id="NextButton" style={{ marginTop: "30px", marginLeft: "0px", height: "40%", width:"10%" }} variant="contained" onClick={handleClick}>{buttonName}</Button>
          </div>
        </Paper>
      </div>
    );

  }else if(preguntas[index].tipo==2){//preguntas[index].tipo==2
    return (
      <div >
        <Paper
          style={{display: "flex",margin: "10px auto",padding: "20px 15px",width: 800,height:"auto",flexWrap: "wrap",textAlign: "center",flexDirection: "column",}}>
          {
              preguntas.filter(item=>item.id==index+1).map(item=>(
                <div key={item.id}>
                  <h2 id={item.id}>Pregunta { preguntas[index].id}</h2>
                  <p>{preguntas[index].txtPregunta}</p>
                </div>
              ))
          }
          <Pregunta2 id={index+1}></Pregunta2>
          <div style={{textAlign: "end"}}>
            <Button id="NextButton" style={{ marginTop: "30px", marginLeft: "0px", height: "40%", width:"10%" }} variant="contained" onClick={handleClick}>{buttonName}</Button>
          </div>
        </Paper>
      </div>
    );
  }else if(preguntas[index].tipo==3){//preguntas[index].tipo==3
    return (
      <div >
        <Paper
          style={{display: "flex",margin: "10px auto",padding: "20px 15px",width: 800,height: "auto",flexWrap: "wrap",textAlign: "center",flexDirection: "column",}}>
          {
              preguntas.filter(item=>item.id==index+1).map(item=>(
                <div key={item.id}>
                  <h2 id={item.id}>Pregunta { preguntas[index].id}</h2>
                  <p>{preguntas[index].txtPregunta}</p>
                </div>
              ))
          }
          <Pregunta3 id={index+1}></Pregunta3>
          <div style={{textAlign: "end"}}>
            <Button id="NextButton" style={{ marginTop: "30px", marginLeft: "0px", height: "40%", width:"10%" }} variant="contained" onClick={handleClick}>{buttonName}</Button>
          </div>
        </Paper>
      </div>
    );
  }

  
}

export default Questions;
