import React from "react";
import "../styles/carrinho.css";

const Carrinho = ({ carrinho, setCarrinho, handleChangeAdd, handleChangeDel }) => {

  const handleRemove = (id) => {
    const arr = carrinho.filter((item) => item.id !== id);
    setCarrinho(arr);
  };

  const handleClear = () => {
    setCarrinho([]);
  }

  return (
    <article>
      {carrinho.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <p>{item.name}</p>
          </div>
          <div className="changeButtonsDiv">
            <button className="changeButton add" onClick={() => handleChangeAdd(item, 1)}>+</button>
            <button className="itemAmount">{item.order}</button>
            <button className="changeButton remove" onClick={() => handleChangeDel(item, -1)}>-</button>
          </div>
          <div>
            <button onClick={() => handleRemove(item.id)}>Remover Produto</button>
          </div>
        </div>
      ))}
      <div className="buttonDiv">
      <button className="clearButton" style={{
        'outline': '0'
      }} onClick={() => handleClear()}>Limpar Carrinho</button>
      </div>

    </article>
  );
};

export default Carrinho;
