import React from "react";

function ItemRender(props) {
  return (
    <div>
      <div className="listItem">
        <p>{props.todoItem}</p>
        <i
          onClick={() => props.deleteTodo(props.id)}
          className="fa-solid fa-xmark"
        ></i>
      </div>
      <hr />
    </div>
  );
}

export default ItemRender;
