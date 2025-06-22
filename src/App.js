import "./App.css";
import { useState} from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const ToggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-10">
        <TextForm mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About mode={mode}/> */}  
    </>
  );
}

export default App;
