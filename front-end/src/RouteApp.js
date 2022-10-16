import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {MenuContatos} from "./MenuContatos";
import {ListarContatos} from "./ListarContatos";
import {CadastrarContatos} from "./CadastrarContatos";

function RouteApp() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MenuContatos/>}/>
                    <Route path="/cadastrar" element={<CadastrarContatos/>}/>
                    <Route path="/listar" element={<ListarContatos/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default RouteApp;