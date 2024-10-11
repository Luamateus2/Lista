import { useState } from "react"

function App(){
 const [itemList,setItemList] = useState([]);
 const [inputText,setInputText] = useState("");
 
 function handleAdicionaItem(){
    const textoSemEspacos = inputText.trim();
    if(textoSemEspacos == "") return;
 
    let newItem = {
      id: Date.now(),
      itemLista: textoSemEspacos,
    };
    setItemList([...itemList,newItem]);
    setInputText("");
 }
 function handleExcluirItem(item){
  setItemList(prevList => prevList.filter(lista  => lista != item));
 }


 return (
 <div className="container">
  <div>
    <h1 className="tituloPrincipal">Lista de Tarefas</h1>
    <input 
      type="text" 
      value={inputText} 
      onChange={(e)=> setInputText(e.target.value)} />

    <button className="botaoAdicionarItem" onClick={handleAdicionaItem}>
      Add
    </button>

  </div>

    <ul className="lista">
      {itemList.map((item) => ( 
        <li className="item" key={item.id}>
          {item.itemLista}   
          <button 
            className="excluirItem" 
            onClick={()=> handleExcluirItem(item)}>
            X
          </button>
        </li>))}
    </ul>
 </div>)
};
export default App;