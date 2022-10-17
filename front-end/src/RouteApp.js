import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {MenuContatos} from "./MenuContatos";
import {ListarContatos} from "./ListarContatos";
import {CadastrarContatos} from "./CadastrarContatos";
import { EditarContatos } from "./EditarContatos";

function RouteApp() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MenuContatos/>}/>
                    <Route path="/cadastrar" element={<CadastrarContatos/>}/>
                    <Route path="/listar" element={<ListarContatos/>}/>
                    <Route path="/editar/:id" element={<EditarContatos/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default RouteApp;