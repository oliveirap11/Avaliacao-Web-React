import { useState } from "react";
import styles from "./mensagem.module.css";
import { Button } from "../../components/Button/button";
import { useNavigate } from "react-router";
export function MensagemPage() {

   const [show, setShow] = useState(false); 
   const navigate = useNavigate(); 

  const handleAlternarMensagem =()=> {
    setShow(!show)
  }
  return(
    <div className={styles.container}>
            <Button onClick={handleAlternarMensagem} message={show ? 'SAIR' : 'ENTRAR'} type="button" />
            <Button
                      type="button"
                      message="Voltar para Home"
                      onClick={() => navigate("/")}
                      className={styles.button}
                    />
         {
          show && <p className={styles.texto}>Uma vez Flamengo
Sempre Flamengo
Flamengo sempre eu hei de ser

É meu maior prazer vê-lo brilhar
Seja na terra, seja no mar
Vencer, vencer, vencer

Uma vez Flamengo
Flamengo até morrer

Na regata, ele me mata
Me maltrata, me arrebata
Que emoção no coração
Consagrado no gramado
Sempre amado, o mais cotado
No Fla-Flu é o: Ai, Jesus!

Eu teria um desgosto profundo
Se faltasse o Flamengo no mundo
Ele vibra, ele é fibra
Muita libra já pesou
Flamengo até morrer eu sou

Uma vez Flamengo
Sempre Flamengo
Flamengo sempre eu hei de ser

É meu maior prazer vê-lo brilhar
Seja na terra, seja no mar
Vencer, vencer, vencer

Uma vez Flamengo
Flamengo até morrer

Na regata, ele me mata
Me maltrata, me arrebata
Que emoção no coração
Consagrado no gramado
Sempre amado, o mais cotado
No Fla-Flu é o: Ai, Jesus!

Eu teria um desgosto profundo
Se faltasse o Flamengo no mundo
Ele vibra, ele é fibra
Muita libra já pesou
Flamengo até morrer eu sou</p>
         }
    </div>
  )
}