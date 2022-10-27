
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const opciones= [
  {
    id:1,
    txtPregunta: "op1",
    idPregunta:2
  },
  {
    id:2,
    txtPregunta: "op2",
    idPregunta:2
  },
  {
    id:3,
    txtPregunta: "op3",
    idPregunta:2
  },
  {
    id:4,
    txtPregunta: "op11",
    idPregunta:3
  },
  {
    id:5,
    txtPregunta: "op22",
    idPregunta:3
  },
  {
    id:6,
    txtPregunta: "op33",
    idPregunta:3
  },
  {
    id:7,
    txtPregunta: "op111",
    idPregunta:8
  },
  {
    id:8,
    txtPregunta: "op222",
    idPregunta:8
  },
  {
    id:9,
    txtPregunta: "op333",
    idPregunta:8
  }
]

function Pregunta2(props){
  //const [opciones,setOpciones]=useState(opciones)
/*
  useEffect(()=>{

    fetch("fetch de opciones de pregunta tipo 2")
    .then(res=>res.json())
    .then((result)=>{
    setOpciones(result);
    })
  
  },[])
    */
    return(
    <div style={{textAlign: "center",display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
              
              <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <div style={{textAlign: "center",display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                  {
                    opciones.filter(item=>item.idPregunta==props.id).map(item=>(
                      <FormControlLabel value={item.id} control={<Radio />} label={item.txtPregunta} key={item.id}/>
                    ))
                    }
                
                </div>

              </RadioGroup>
            </FormControl>
          </div>
    );

}

export default Pregunta2;