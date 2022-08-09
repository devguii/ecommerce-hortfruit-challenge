import React from "react";
import '../styles/item.css'

const Item = ({ item, handleClick }) => {

  const { id, name, nutritions = {}} = item;

  return (
    <div className="Item">
      <div className="image_box">
      </div>
      <div className="details">
        <p className="nome">Nome: {name}</p>
        <p className="id">ID: {id}</p>
        
        <p className="info">Informações Nutricionais</p>
        <p>Carboidratos: {nutritions.carbohydrates}</p>
        <p>Proteínas: {nutritions.protein}</p>
        <p>Gordura: {nutritions.fat}</p>
        <p>Calorias: {nutritions.calories}</p>
        <p className="sugar">Açucar: {nutritions.sugar}</p>
        <button onClick={() => handleClick(item)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default Item;

