import { useState } from "react";

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
    
    //setInterval to run every sec.
    setInterval(() => {
        time = new Date().toLocaleTimeString();
        setCtime(time);        
    }, 1000);

    return ( 
        <>
        <h1>{ctime}</h1>
        </>
     );
}
 
export default DigitalClock;