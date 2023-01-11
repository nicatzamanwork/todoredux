import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Adder } from "../redux/actions/itemActionCreator";

const Todo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(Adder(value));
    setValue("");
  };

  return (
    <form onSubmit={(event) => submitForm(event)}>
      <h1>Add To List</h1>
      <input
        className="inputValues"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="AddButton">Add</button>
    </form>
  );
};

export default Todo;
