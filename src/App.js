import React, { useState} from "react";
import Lista from "./components/lista";
import Navbar from "./components/navbar";
import Carrinho from "./components/carrinho";

const App = () => {
  const [show, setShow] = useState(true);
  const [carrinho, setCarrinho] = useState([]);

  const handleClick = (item) => {
    item.order = '1'
    if (carrinho.indexOf(item) !== -1) return;
    setCarrinho([...carrinho, item]);
  };

  const handleChangeAdd = (item, num) => {
    const ind = carrinho.indexOf(item);
    const arr = carrinho;
    let converter = parseInt(item.order);
    converter = converter += num;
    arr[ind].order = '' + converter;

    if (arr[ind].order === '0') arr[ind].order = '1';
    setCarrinho([...arr]);
  }
  
  const handleChangeDel = (item, num) => {
    const ind = carrinho.indexOf(item);
    const arr = carrinho;
    let converter = parseInt(item.order);
    converter = converter += num;
    arr[ind].order = '' + converter;

    if (arr[ind].order === '0') arr[ind].order = '1';
    setCarrinho([...arr]);
  }
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={carrinho.length} />
      {show ? (
        <Lista handleClick={handleClick} />
      ) : (
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} handleClick={handleClick} handleChangeAdd={handleChangeAdd} handleChangeDel={handleChangeDel}/>
      )}
    </React.Fragment>
  );
};

export default App;
