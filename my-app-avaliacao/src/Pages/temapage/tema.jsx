import styles from "./tema.module.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/button";

export function TemaPage(){

  const [escuro, setEscuro] = useState(false);
  const navigate = useNavigate();
  
  return(
      <div
      className={`${styles.container} ${escuro ? styles.escuro : styles.claro}`}
    >
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          message={`Tema ${escuro ? "Escuro" : "Claro"}`}
          onClick={() => setEscuro(!escuro)}
          className={styles.button}
        />

        <Button
          type="button"
          message="Voltar para Home"
          onClick={() => navigate("/")}
          className={styles.button}
        />
      </div>
    </div>
    
  )
}
