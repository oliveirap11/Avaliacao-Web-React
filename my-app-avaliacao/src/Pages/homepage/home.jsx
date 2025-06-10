import { useNavigate } from "react-router";
import styles from "./home.module.css";
export function HomePage() {

  const navigate = useNavigate();
  return(
    
    <div className={styles.container}>
     <ul>
      <li onClick={()=> navigate("/tema")}>tema</li>
      <li onClick={()=> navigate("/tarefas")}>tarefas</li>
      <li onClick={()=> navigate("/mensagem")}>mensagem</li>
     </ul>

    </div>
  )
}