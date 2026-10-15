import {BrowserRouter , Routes , Route } from "react-router-dom" ;
import { useState } from "react";
import form from  "./form";
import result from  "./result";


function App()
{
  const [name , setName] = useState("");
  const [rollno , setRollno] = useState("");
  const [Department , setDep] = useState("");

  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<form setName ={setName} setRollno = {setRollno} setDep={setDep} /> } />

      <Route path = "/result" element= {<result  name = {name} rollno = {rollno} Department = {Department} /> } />
       
      </Routes>
      </BrowserRouter>
  )
}