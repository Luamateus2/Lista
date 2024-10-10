import { useState } from "react"

function App(){
 const [itemList,setItemList] = useState([]);
 const [inputText,setInputText] = useState("");
 
 function handleAdicionaItem(){
    setItemList([...itemList,inputText]);
    setInputText("");
 }
 return (
 <div className="container">
    <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)} />
    <button className="botaoAdicionarItem" onClick={handleAdicionaItem}>Add</button>
    <ul className="lista">
      {itemList.map((item,i) => ( 
        <li className="item" key={i}>{item} 
           <button className="excluirItem">X</button>
        </li>))}
    </ul>
 </div>)
};
export default App