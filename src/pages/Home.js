import React from "react";
// import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
// import Main from "./Main"

function Home(){
    // const welcome = "Welcome, confused souls";
    // const welcome2 = "If you're feeling lost, maybe you can find your answer here"
    const welcome = "ถ้าคุณรู้สึกสับสนหรือหลงทาง ไม่รู้จะทำยังไงกับปัญหาที่เจอ"
    const welcome2 = "คุณอาจพบคำตอบจากในนี้ได้นะ"
    // document.body.style.width = '100%';
    // document.body.style.margin = 0;
    // document.documentElement.style.width = '100%';  
    // document.documentElement.style.margin = 0;
    // document.body.style.backgroundColor = 'lime';

    const navigate = useNavigate();
    
    return (
        // <div style={{
        //     backgroundImage: "url(/sun.jpg)",
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //     height:'100vh',
        //     display: 'grid',
        //     justifyContent: 'center'
        // }}>
            // <div style={{
            //     display: 'grid',
            //     alignItems: 'center',
            //     // alignContent: 'space-around',
            //     justifyContent: 'center',
            // }}>
        <div id="home-background">  
            <div class="element">
                <h1>{welcome}</h1>
                <h2>{welcome2}</h2>
                <button class="button-55" onClick={() => navigate('/main', { replace: true })}>หาคำตอบ</button>
            </div>
        </div>
    );
}

export default Home