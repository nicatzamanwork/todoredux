import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/actions/itemActionCreator";

const TodoList = () => {
  const todoss = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {todoss &&
        todoss.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className="DeleteButton"
              onClick={() => dispatch(deleteItem(todo))}
            >
              x
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
