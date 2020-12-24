import React from "react"

const Item = (props)=>{
return<div>
          <p>{props.title} <em>{props.dueDate}</em></p>
          <p>{props.body}</p>
      </div>
}


export default Item;
