import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/home";
import { TarefasPage } from "../pages/tarefaspage/tarefas";
import { TemaPage } from "../pages/temapage/tema";
import { MensagemPage } from "../Pages/mensagem/mensagem";


export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/tema" element={<TemaPage/>}/>
            <Route path="/tarefas" element={<TarefasPage/>}/>
            <Route path="/mensagem" element={<MensagemPage/>}/>
        </Routes>
    )
}