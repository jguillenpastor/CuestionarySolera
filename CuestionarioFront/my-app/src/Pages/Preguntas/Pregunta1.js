import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";

function Pregunta1(props){
    return(
    <FormControl>
            <FormLabel id="demo-form-control-label-placement">
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel value="1" id={"question"+props.id+"RadioButton1"} control={<Radio />} label="1" labelPlacement="top" />
              <FormControlLabel value="2" id={"question"+props.id+"RadioButton2"} control={<Radio />} label="2" labelPlacement="top" />
              <FormControlLabel value="3" id={"question"+props.id+"RadioButton3"} control={<Radio />} label="3" labelPlacement="top" />
              <FormControlLabel value="4" id={"question"+props.id+"RadioButton4"} control={<Radio />} label="4" labelPlacement="top" />
              <FormControlLabel value="5" id={"question"+props.id+"RadioButton5"} control={<Radio />} label="5" labelPlacement="top" />
              <FormControlLabel value="6" id={"question"+props.id+"RadioButton6"} control={<Radio />} label="6" labelPlacement="top" />
              <FormControlLabel value="7" id={"question"+props.id+"RadioButton7"} control={<Radio />} label="7" labelPlacement="top" />
              <FormControlLabel value="8" id={"question"+props.id+"RadioButton8"} control={<Radio />} label="8" labelPlacement="top" />
              <FormControlLabel value="9" id={"question"+props.id+"RadioButton9"} control={<Radio />} label="9" labelPlacement="top" />
              <FormControlLabel value="10" id={"question"+props.id+"RadioButton10"} control={<Radio />} label="10" labelPlacement="top" />
  
      
            </RadioGroup>
          </FormControl>
    )
}

export default Pregunta1;