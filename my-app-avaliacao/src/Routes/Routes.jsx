import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/homepage/home";
import { TemaPage } from "../Pages/temapage/tema";
import { MensagemPage } from "../Pages/mensagem/mensagem";
import { TarefasPage } from "../Pages/tarefaspage/tarefas";


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