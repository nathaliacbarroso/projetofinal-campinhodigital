import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Red from './Red';

function RouteComponent() {

    return (
        <BrowserRouter><Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/red" element={<Red />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent;