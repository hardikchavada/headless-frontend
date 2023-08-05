import { useState } from "react";
import DigitalClock from './DigitalClock';

const TestComponent = () => {
    
    const [age, setAge] = useState(88);
    function addAgeNumber() { 
        setAge(age + 1);        
    }
    return ( 
        <>  
            <DigitalClock />
            <h1>Test Component!</h1>
            <button onClick={addAgeNumber}> Click me</button>
            <p>{age}</p>
        </>
     );
}
 
export default TestComponent;