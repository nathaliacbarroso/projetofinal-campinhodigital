import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Red from './Red';
import Natal from './Natal';

function RouteComponent() {

    return (
        <BrowserRouter><Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/red" element={<Red />}></Route>
            <Route path="/natal" element={<Natal />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;