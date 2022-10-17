import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {MenuContatos} from "./MenuContatos";
import {ListarContatos} from "./ListarContatos";
import {CadastrarContatos} from "./CadastrarContatos";
import { FiltrarContatos } from "./FiltrarContatos";

function RouteApp() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MenuContatos/>}/>
                    <Route path="/cadastrar" element={<CadastrarContatos/>}/>
                    <Route path="/listar" element={<ListarContatos/>}/>
                    <Route path="/filtrar" element={<FiltrarContatos/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default RouteApp;