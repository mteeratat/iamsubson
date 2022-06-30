import { useState } from "react"

function Main(){
    // alert("tetetet")
    const [ severity, setSeverity ] = useState("5");

    const inputSevere = () => {
        const num = document.getElementById('range').value
        console.log(num)
        setSeverity(num)
    }

    const rand = () => {
        const ans = Math.floor(Math.random()*10)
        console.log(ans)
    }

    return (
        <div id='main-background'>
            <h1 class='element'>Severity</h1>
            <input id='range' class='element' type='range' min='0' max='5' step='1' onChange={inputSevere}/>
            <h2 class='element'>{severity}</h2>
            <input type='button' class='button-55' value='lol' onClick={rand}/>

        </div>
    )
}

export default Main