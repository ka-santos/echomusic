import React from "react";
import { useNavigate } from "react-router-dom";

export default function Exemplo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return <button onClick={handleClick}>Ir pro login</button>;
}
