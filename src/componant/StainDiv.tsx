import React from 'react';
import { Stain } from '../interface/Stain';
import './StainDiv.css'

interface props{
    data:Stain;
    idData:number;
    setTitleValue:(value: React.SetStateAction<string>) => void;
    setStateValue:(value: React.SetStateAction<string>) => void;
    setBodyValue:(value: React.SetStateAction<string>) => void;
    setDeletTodoStain:React.Dispatch<React.SetStateAction<number | null>>;
    setDeletDoingStain:React.Dispatch<React.SetStateAction<number | null>>;
    setDeletDonneStain:React.Dispatch<React.SetStateAction<number | null>>;
    setActifValue:React.Dispatch<React.SetStateAction<boolean>>;
    setName:React.Dispatch<React.SetStateAction<string>>;
}

const StainDiv:React.FC<props> = ({data, idData, setTitleValue, setStateValue, setBodyValue, 
    setDeletTodoStain, setDeletDoingStain, setDeletDonneStain, setActifValue,setName}:props) => {
    const writStain:()=>void=()=>{
        setActifValue(true);
        setTitleValue(data.titre);
        setStateValue(data.status);
        setBodyValue(data.body);
        if (data.status=="to do") {
            setDeletTodoStain(idData);
            setDeletDoingStain(null);
            setDeletDonneStain(null);
            setName("TO DO");
        }else
        if (data.status=="doing") {
            setDeletTodoStain(null);
            setDeletDoingStain(idData);
            setDeletDonneStain(null);
            setName("DOING");
        }else
        if (data.status=="donne") {
            setDeletTodoStain(null);
            setDeletDoingStain(null);
            setDeletDonneStain(idData);
            setName("DONNE");
        }
    }



    return (
        <div key={idData} className="alert alert-success one" role="alert" onClick={writStain}>
            <h3>{data.titre}</h3>
            <div>{data.body}</div>
        </div>
    );
};

export default StainDiv;