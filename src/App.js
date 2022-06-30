import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/main" element={<Main/>}></Route>
                <Route path="*" element={<Navigate to="/"/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App