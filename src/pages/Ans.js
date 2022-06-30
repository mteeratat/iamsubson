import React from "react";
import { useNavigate } from "react-router-dom";

function Ans(){
    const navigate = useNavigate();

    const back2main = () => {
        navigate('/main', { replace: true })
    }

    return (
        <div id='home-background'>
            <h1>hello</h1>
            <input type='button' class='button-55' value='เอาใหม่' onClick={back2main}/>
        </div>
    )
}

export default Ans