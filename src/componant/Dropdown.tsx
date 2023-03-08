import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample(Action:(value: React.SetStateAction<string>) => void,name:string,setName:React.Dispatch<React.SetStateAction<string>>) {
    

const changeAction:(Action1:(value: React.SetStateAction<string>)=>void, name: string)=>void=(action,name)=>{
    setName(name.toUpperCase());
    action(name);
}

const chageTodo:()=> void = ()=>{
    changeAction(Action,"to do")
}
const chageDoing:()=> void = ()=>{
    changeAction(Action,"doing")
}
const chageDonne:()=> void = ()=>{
    changeAction(Action,"donne")
}

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={chageTodo}>TO_DO</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={chageDoing}>DOING</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={chageDonne}>DONNE</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;