import React from 'react';
import { Stain } from '../interface/Stain';
import BasicExample from './Dropdown';
import './Formulaire.css'
import Button from 'react-bootstrap/Button';

interface props{
    addStain:(e: React.FormEvent) => void;
    setTitleValue:(value: React.SetStateAction<string>) => void;
    setStateValue:(value: React.SetStateAction<string>) => void;
    setBodyValue:(value: React.SetStateAction<string>) => void;
    bodyValue:string;
    stateValue:string;
    titleValue:string;
    setActifValue:React.Dispatch<React.SetStateAction<boolean>>;
    name:string;
    setName:React.Dispatch<React.SetStateAction<string>>;
}

const Formulaire:React.FC<props> = ({addStain, setTitleValue, setStateValue, setBodyValue, 
    bodyValue, stateValue, titleValue, setActifValue, name, setName}) => {
    return (
            <form className="newStain">
                <div className="whriteInput">
                    <div className="topeWrite">
                        <div className="writeTopRigth rowDiv">
                            <h3>title: </h3>
                            <input type="text" className='writeTitle' placeholder='write a title' value={titleValue} 
                            onChange={event => {setTitleValue(event.target.value);setActifValue(true)}}/>
                            <p>{"   "}</p>
                        
                        </div>
                        <div className='transparant'>vvvv</div>
                        <div className=" mb-3 writeTopLeft rowDiv">
                            <h3>   status: </h3>
                            <p className='transparant'>vv</p>
                            {BasicExample(setStateValue,name,setName)}
                            <input type="text" id="validationCustom01" className='writeStatus invisible form-control' placeholder='write a body' value={stateValue} 
                            onChange={event => {setStateValue(event.target.value);setActifValue(true)}}/>
                        </div>                    
                    </div>
                    <div className="mb-3 botWrite rowDiv">
                        <h3>Body:</h3>
                        <textarea className="form-control writedosy" 
                        placeholder='write a body' id="exampleFormControlTextarea1" 
                        onChange={event => {setBodyValue(event.target.value);setActifValue(true)}} 
                        value={bodyValue}>{bodyValue}</textarea>
                    </div>
                </div>
                <div className="validInpout">
                    <Button variant="success" onClick={addStain} type="submit">ADD</Button>
                </div>
            </form>
    );
};

export default Formulaire;