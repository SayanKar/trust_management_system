import React,{useState} from 'react';
import InputTable from './components/inputTable/InputTable';
import { Button } from '@mui/material';
import OutputTable1 from './components/outputTable1/OutputTable1';
import OutputTable2 from './components/outputTable2/OutputTable2';
import { rows } from './components/inputTable/rows';
function App() {
  
  const [roundNo,setroundNo] =useState(0);
  const [vehicle,setVehicle] = useState([]);
  const [vehicleNo,setVehicleNo] =useState(0);
  
  const onSimulate=()=>{
    let preVal= roundNo;
    setroundNo(preVal+1);
    //connect it to backend such that both the tables gets updated
  }


  const onAddVehicle = () =>{
    
    let preVal =vehicleNo+1;
    setVehicleNo(preVal);
    const temp=vehicle;
    setVehicle([...temp,rows[vehicleNo+1]]);
  }

  const onAddMetamask= () =>{

  }
  return (
    <div style={{display:'flex',flexDirection:"column"}}>
      <div style={{margin:"auto"}}>
        <h2>Round No.: {roundNo}</h2>
      </div>
      <div>
        <div style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly"}}>
          <div>
            <Button onClick={onAddVehicle}>Add a Vehicle</Button>
          </div>
          <div>
            <Button onClick={onAddMetamask}>Connect To Metamask</Button>
          </div>
        </div>
      </div>
      <div style={{width:900, height:300, margin:"auto",padding:20}}> 
       <InputTable rows={vehicle}/>
      </div>
      <div style={{margin:"auto"}}>
        <Button onClick={onSimulate}>Simulate!</Button>
      </div>
      <div style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly"}}>
        <div style={{width:600, height:300, margin:"auto",padding:20}}>
          <OutputTable1 />
        </div>
        <div style={{width:600, height:300, margin:"auto",padding:20}}>
          <OutputTable2 />
        </div>
      </div>
    </div>
  );
}

export default App;
