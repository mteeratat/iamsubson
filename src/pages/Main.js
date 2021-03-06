import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Main(){
    // alert("tetetet")
    const [ severity, setSeverity ] = useState("5");

    const inputSevere = () => {
        const num = document.getElementById('range').value
        console.log(num)
        setSeverity(num)
    }
    
    const navigate = useNavigate();

    const rand = () => {
        const ans = Math.floor(Math.random()*10)
        console.log(ans)
        navigate('/ans', { replace: true });
    }

    return (
        <div id='home-background'>
            {/* <h1 class='element'>Severity</h1> */}
            <h1 class='element'>ระดับความจริงจัง</h1>
            <input id='range' class='element' type='range' min='1' max='5' step='1' onChange={inputSevere}/>
            <h2 class='element'>{severity}</h2>
            <input type='button' class='button-55' value='เลือก' onClick={rand}/>
        </div>
    )
}

export default Main