"use client"
import './index.css';
import Link from "next/link"

import { useState } from "react"

export default function oi(){
 
 const [tarefas,settarefas] = useState<string[]>([])
const [input,setinput] = useState<string>("")

function add(){
  if(input.trim() === ""){
    alert("Digite Uma Tarefa")
    return
  }

settarefas([...tarefas,input])
setinput("")

}




return(
  <>
 

  <section className='Container'>
    <h1>Lista De Tarefas</h1>
    <input value={input} onChange={(e) => {
      setinput(e.target.value)
      console.log(e.target.value)
    }}></input>
    <button onClick={add}>Add</button>
    <ul>
    {tarefas.map((tarefas:any) => (
      <li key={tarefas}>
        {tarefas}
      </li>
    ))}
    </ul>
  </section>
    </>
  
)


}
