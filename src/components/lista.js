import React, { useState, useEffect } from "react";
import api from "../services/api";
import Item from "./item";
import "../styles/lista.css";

const Lista = ({ handleClick }) => {

  const [produtos, setProdutos] = useState([{}])

  useEffect(()=>{
    api
    .get('/api/fruit/all')
    .then((response)=>{
        setProdutos(response.data)
    })
  }, [])

  const data = produtos

  return (
    <section>
      {data.map((item) => (
        <Item key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </section>
  );
};

export default Lista;
