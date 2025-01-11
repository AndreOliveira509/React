import React, { useState } from "react";

export default function Comprimento() {
  const [log, setLog] = useState(false);

  const msgLogin = () => {
    return "Usuário Logado";
  };

  const msgLoginOff = () => {
    return "Favor Logar";
  };

  const cumprimentar = () => {
    const hora = new Date().getHours();
    if (hora >= 0 && hora < 13) {
      return <p>Bom Dia</p>;
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa Tarde</p>;
    } else {
      return <p>Boa Noite</p>;
    }
  };

  return (
    <>
      {cumprimentar()}
      <p>{log ? msgLogin() : msgLoginOff()}</p>
      <button onClick={() => setLog(!log)}>{log ? "Logoff" : "Login"}</button>
    </>
  );
}
