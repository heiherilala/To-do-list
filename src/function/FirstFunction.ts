import { Stain } from '../interface/Stain';




export function FirstFunction(Stain: Stain[], deletStain: number, setStain:(value: React.SetStateAction<Stain[]>) => void) {
    const forChageStain:Stain[] = Stain;
    if (forChageStain.length==1) {
        setStain([]);
    }else if (forChageStain.length==2) {
        if (deletStain==0) {
            setStain([forChageStain[1]]);
        }else{
            setStain([forChageStain[0]]);
        }
    }else{
        if (deletStain==0) {
            forChageStain.shift();
            setStain(forChageStain);
        }else if (deletStain==Stain.length-1) {
            forChageStain.pop();
            setStain(forChageStain);
        }else{
            setStain([...Stain.slice(0,deletStain-1),
                ...Stain.slice(deletStain)]);
        }
    }
  }