import { Button, FormControl } from "@mui/material";
import React,{useState} from "react";
import { TextField } from "@mui/material";
export default function BodyinModal(props){

  const [value,setValue] =useState("");
  const [id,setId]=useState("");
  const {handleClose} =props;
  const [formValues, setFormValues] = useState({});
  const onChange = (value, id) => {
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  const onSubmit = ()=>{
    handleClose();
  }
    const onTextChange = (event) => {
        // const value = _get(event , 'target.value');
        setValue(value);
        setId(id);
        onChange(value, id);
      };
    return(
        <FormControl>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <TextField
            id="vehicle_id"
            label="Vehicle_Id"
            onChange={onTextChange(value,id)}
            fullWidth
            />
            <TextField
            id="rsu"
            label="RSU"
            onChange={onTextChange}
            fullWidth
            />
            <TextField
            id="rating"
            label="Rating"
            onChange={onTextChange}
            fullWidth
            />
            <TextField
            id="traffic"
            label="Traffic"
            onChange={onTextChange}
            fullWidth
            />
             <TextField
            id="accident"
            label="Accident"
            onChange={onTextChange}
            fullWidth
            />
            <Button onClick={onSubmit}>Submit</Button>
         </div>
        </FormControl>
    )
}