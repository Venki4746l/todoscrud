import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo, updateTodo } from "../../Redux/actions/todoActions";
const TodosForm = ({ editStatus,todoData,editSatusUpdate}) => {
  const dispatch = useDispatch();
  //save input text
  const [inputText, setInputText] = useState("");
  
  useEffect(()=>{
    if(editStatus){
      setInputText(todoData.text)
      console.log(todoData.text)
    }
  },[editStatus ,todoData])
  //from submiting handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  const onEditFromSubmitHandler=(e)=>{
    e.preventDefault()
    const updateTodoData={
      ...todoData,
      text:inputText
    }
    dispatch(updateTodo(updateTodoData))
    setInputText("")
    editSatusUpdate()

   
    

  }
  return (
    <div>
      {editStatus ? (
        <form onSubmit={onEditFromSubmitHandler}>
          <input
            type="text"
            value={inputText}
            placeholder="Enter Your Todo"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={inputText}
            placeholder="Enter Your Todo"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
};

export default TodosForm;
