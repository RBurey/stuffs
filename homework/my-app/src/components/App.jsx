import React,{useState} from "react"
import Axios from "axios"
import Item from "./Item"


const App = ()=>{

// const handleSend = ()=>{
//
//   let params = new URLSearchParams();
//   params.append('id', "Maths");
//   params.append('body', "Pythogarean Theorem a square + b square = c squared");
//   params.append("dueDate",'September 16,2020');
//   Axios.post("/con",params).then((res)=>{
//     console.log(res.data);
//   });
// }
// const handleReceive = ()=>{
//   Axios.post("/con2",).then((res)=>{
//     console.log(res.data);
//   });
// }

const [title,setTitle] = useState("");
const [body,setBody] = useState("");
const [dueDate,setDate] = useState("");
const [items,setItems]= useState([]);
const handleChange = (event)=>{
      const input = event.target.value;
      const name = event.target.name;
      if(name==="title")
      {
        setTitle(input);
      }else if(name==="dueDate")
      {
        setDate(input);
      }else if(name==="body")
      {
        setBody(input);
      }



}

const handleClick = ()=>{

    let params = new URLSearchParams();
    params.append('title', title);
    params.append('body',body);
    params.append("dueDate",dueDate);
    Axios.post("/con",params).then((res)=>{
      console.log(res.data);
      setItems(res.data);
    });
}
const handleSubmit = (event)=>{
      event.PreventDefault();
}


  return <div>
              <h1>Homework List</h1>
              <form onSubmit={handleSubmit}>
                  <label>Title: </label>
                  <input onChange={handleChange} type="text" value={title} name="title" />
                  <br />
                  <br />
                  <label>Due Date: </label>
                  <input onChange={handleChange} type="text" value={dueDate} name="dueDate" />
                  <br />
                  <br />
                  <label>Body: </label>
                  <input onChange={handleChange} type="text"  value={body} name="body" />
                  <br />
                  <br />
                  <button onClick={handleClick} type="button">Submit</button>
                  {items.map((item)=>{
                    return(
                      <Item key={item.id} title={item.title} body={item.body} dueDate={item.dueDate} />
                    );
                  })}
              </form>
        </div>;
}
export default App;
