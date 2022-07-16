import { type } from '@testing-library/user-event/dist/type';
import { constants } from 'buffer';
import React, { useEffect, useState } from 'react';
import './Acceull.css'
import { Stain } from '../interface/Stain';
import StainDiv from '../componant/StainDiv'
import Formulaire from '../componant/Formulaire';
import { FirstFunction } from '../function/FirstFunction';

const Acceull = () => {

    const [actifValue, setActifValue] = useState<boolean>(false);
    const [titleValue, setTitleValue] = useState<string>("");
    const [bodyValue, setBodyValue] = useState<string>("");
    const [stateValue, setStateValue] = useState<string>("to do");
    const [deletTodoStain, setDeletTodoStain] = useState<number | null>(null);
    const [deletDoingStain, setDeletDoingStain] = useState<number | null>(null);
    const [deletDonneStain, setDeletDonneStain] = useState<number | null>(null);
    const [name, setName] = useState<string>("TO DO")

    let forChageStain:Stain[];
    const [todoStain, setTodoStain] = useState<Stain[]>([]);
    const [doingStain, setDoingStain] = useState<Stain[]>([]);
    const [donneStain, setDonneStain] = useState<Stain[]>([]);

    const writeInput:()=>void=()=>{

    };

    const addStain:(e:React.FormEvent)=>void=(e)=>{
        if ((actifValue)&&(titleValue!="")&&(bodyValue!="")) {
            e.preventDefault();
            if ((deletTodoStain!=null)&&(stateValue==="to do")) {
                forChageStain=todoStain;
                forChageStain[deletTodoStain]={titre:titleValue, status:stateValue, body:bodyValue};
                setTodoStain(forChageStain);
            }else if((deletDoingStain!=null)&&(stateValue==="doing")){
                forChageStain=doingStain;
                forChageStain[deletDoingStain]={titre:titleValue, status:stateValue, body:bodyValue};
                setDoingStain(forChageStain);
            }else if((deletDonneStain!=null)&&(stateValue==="donne")){
                forChageStain=donneStain;
                forChageStain[deletDonneStain]={titre:titleValue, status:stateValue, body:bodyValue};
                setDonneStain(forChageStain);
            }else{
                if (deletTodoStain!=null) {
                    FirstFunction(todoStain,deletTodoStain,setTodoStain);
                }else
                if (deletDoingStain!=null) {
                    FirstFunction(doingStain,deletDoingStain,setDoingStain);
                }else
                if (deletDonneStain!=null) {
                    FirstFunction(donneStain,deletDonneStain,setDonneStain);
                }
                
                if (stateValue==="to do") {
                    setTodoStain([{titre:titleValue, 
                        status:stateValue, body:bodyValue},...todoStain]);
                }else if (stateValue==="doing") {
                    setDoingStain([{titre:titleValue, 
                        status:stateValue, body:bodyValue}, ...doingStain]);
                }else if (stateValue==="donne") {
                    setDonneStain([{titre:titleValue,
                         status:stateValue, body:bodyValue}, ...donneStain]);
                }
            }
            setTitleValue("");
            setBodyValue("");
            //setStateValue("to do");
            setDeletTodoStain(null);
            setDeletDoingStain(null);
            setDeletDonneStain(null);
            setActifValue(false);
        }else{
            e.preventDefault();
        }
    };

    console.log(todoStain);

    return (
        <>
            <h1>MY TO DO LIST</h1>

            <Formulaire 
            addStain = {addStain}
            setTitleValue = {setTitleValue}
            setStateValue = {setStateValue}
            setBodyValue = {setBodyValue}
            bodyValue = {bodyValue}
            stateValue = {stateValue}
            titleValue = {titleValue}
            setActifValue = {setActifValue}
            name={name}
            setName={setName}
            />

            <div className="tasc">
                <div className="toDoTasc alert alert-success" role="alert">
                    <h2>TO DO</h2>
                    {todoStain.map((t)=>(
                        <StainDiv data={t} idData={
                            todoStain.indexOf(t)} key={todoStain.indexOf(t)}
                            setTitleValue={setTitleValue} 
                            setStateValue={setStateValue} 
                            setBodyValue={setBodyValue}
                            setDeletTodoStain={setDeletTodoStain}
                            setDeletDoingStain={setDeletDoingStain}
                            setDeletDonneStain={setDeletDonneStain}
                            setActifValue={setActifValue}
                            setName={setName}
                        />
                    ))}
                </div>
                <div className="doingStain alert alert-success" role="alert">
                    <h2>DOING</h2>
                    {doingStain.map((t)=>(
                        <StainDiv 
                            data={t} 
                            idData={doingStain.indexOf(t)} key={doingStain.indexOf(t)}
                            setTitleValue={setTitleValue} 
                            setStateValue={setStateValue} 
                            setBodyValue={setBodyValue} 
                            setDeletTodoStain={setDeletTodoStain}
                            setDeletDoingStain={setDeletDoingStain}
                            setDeletDonneStain={setDeletDonneStain}
                            setActifValue={setActifValue}
                            setName={setName}
                        />
                    ))}
                </div>
                <div className="doneStain alert alert-success" role="alert">
                    <h2>DONE</h2>
                    {donneStain.map((t)=>(
                        <StainDiv data={t} idData={
                            donneStain.indexOf(t)} key={donneStain.indexOf(t)}
                            setTitleValue={setTitleValue} 
                            setStateValue={setStateValue} 
                            setBodyValue={setBodyValue} 
                            setDeletTodoStain={setDeletTodoStain}
                            setDeletDoingStain={setDeletDoingStain}
                            setDeletDonneStain={setDeletDonneStain}
                            setActifValue={setActifValue}
                            setName={setName}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Acceull;