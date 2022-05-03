import React,{useState} from 'react';
import InputTable from './components/inputTable/InputTable';
import { Button } from '@mui/material';
import OutputTable1 from './components/outputTable1/OutputTable1';
import OutputTable2 from './components/outputTable2/OutputTable2';
import { CONTRACT_ADDRESS, NETWORKS_LIST, NETWORK, abi } from "./config.js";
import { ethers } from "ethers";
function App() {
  
  const [roundNo,setroundNo] =useState(0);
  const [vehicle,setVehicle] = useState([]);
  const [vehicleNo,setVehicleNo] =useState(0);
  const [address, setAddress] = useState();
  const [contract, setContract] = useState();

  const onSimulate=()=>{
    let preVal= roundNo;
    setroundNo(preVal+1);
    
    //connect it to backend such that both the tables gets updated
  }

  const onAddVehicle = () =>{
    setVehicle([...vehicle,
      {
        id: vehicleNo + 1,  
        vehicle_id: vehicleNo + 1,
        rsu: 0,
        traffic: 0,
        accident:false,
        rating: 500,
      }
    ]);
    setVehicleNo(vehicleNo + 1);
  }

  const onAddMetamask= () =>{
    connect();
  }

  async function switchNetwork() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: NETWORKS_LIST[NETWORK]["chainId"] }],
      });
      alert("Switched to " + NETWORK + " network");
      return true;
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [NETWORKS_LIST[NETWORK]],
          });
          alert("Added network successfully");
          return true;
        } catch (addError) {
          console.log(addError);
          alert("Failed to add Network");
        }
      }
      console.log(switchError);
      alert("Failed to add " + NETWORK + " network");
      return false;
    }
  }

  async function connect() {
    console.log("connectCalled");
    if (typeof window.ethereum === "undefined") {
      console.log("MetaMask is not installed!");
      alert("Couldn't find MetaMask");
    } else {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let switchNetworkSucces = await switchNetwork();
        if (!switchNetworkSucces) return;
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const add = await signer.getAddress();
          setAddress(add);
          try {
            const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
            setContract(contract);
            alert("Connected to MetaMask");
          } catch (err) {
            alert("Something went wrong! Couldn't connect to contract");
            console.log(err);
          }
        } catch (err) {
          console.log(err);
          alert("Something went wrong!");
        }
      } catch (err) {
        console.log(err);
        alert(err.message);
      }
    }
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
            {!address ? <Button onClick={onAddMetamask}>Connect To Metamask</Button>: "Connected"}
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
