import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/Form";
import { addInfo } from "./utils/functions"
 
const initialState = {username:"", phoneNumber:"", gender:"NO INFO"}

function App() {
  const[info, setInfo]=useState(initialState);

  const handleSubmit = (e) =>{
    e.preventDefault();
    addInfo(info)
  }
  return (
    <div className="App">
      <FormComponent handleSubmit={handleSubmit} info={info} setInfo={setInfo}   />
      <Contacts/>
      
    </div>
  );
}

export default App;
