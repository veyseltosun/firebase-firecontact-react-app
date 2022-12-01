import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/Form";
import { addInfo, updateHandler } from "./utils/functions"
import { ToastContainer } from "react-toastify";
 
const initialState = {username:"", phoneNumber:"", gender:"NO INFO"}

function App() {
  const[info, setInfo]=useState(initialState);

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    if (info?.id){
      updateHandler(info)
    }else{
      addInfo(info)

    }
    setInfo(initialState)
    
  };
  const updateFormHandler = (item) => {
    setInfo({...item})

  }
  return (
    <div className="App">
      <FormComponent handleFormSubmit={handleFormSubmit} info={info} setInfo={setInfo}   />
      <Contacts className="contacts" updateFormHandler={updateFormHandler}/>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
