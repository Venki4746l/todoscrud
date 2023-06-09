import React, { useState } from "react";
import TodosForm from "./TodosForm";
import { useSelector, useDispatch } from "react-redux";
import "./Todos.css";
import {
  toggleTodo,
  deleteTodo,
  sreachTodo,
  setActiveTab,
} from "../../Redux/actions/todoActions";

const TodoDisplay = () => {
  //srecah the todos

  const dispacth = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const sreachedText = useSelector((state) => state.todos.sreachText);
  const activeTab = useSelector((state) => state.todos.filterMethod);

  //edit handler staus satus 
  const [editStaus,setEditStaus]=useState(false)
  const [editTodoData,setEditTodoData]=useState(null)
  //tabs
  const tabTodosFilter = todos.filter((todo) => {
    if (activeTab === "REAMING") {
      return !todo.completed;
    }
    if (activeTab === "COMPLETED") {
      return todo.completed;
    } else {
      return todo;
    }
  });

  //toggle check box handler
  const onToggleCheckHandler = (id) => {
    dispacth(toggleTodo(id));
  };
  //delted handler
  const onDletedTodoHanlder = (id) => {
    dispacth(deleteTodo(id));
  };
  const onSreachHanlder = (e) => {
    dispacth(sreachTodo(e.target.value));
  };
  //const sreach filter
  const sreachedResulut = tabTodosFilter.filter((todo) =>
    todo.text.toLowerCase().includes(sreachedText.toLowerCase())
  );

  //on edit buuton click 
  const onEditHandler=(todo)=>{
    setEditStaus(true)
    setEditTodoData(todo)

  }
  const onEditUpdate=()=>{
    setEditStaus(false)
  }


  return (
    <div>
      <TodosForm editStatus={editStaus} todoData={editTodoData} editSatusUpdate={onEditUpdate} />

      {/* sreach the todos section */}
      <div style={{ display: "felx", margin: "20px" }}>
        <input
          type="text"
          placeholder="start sreach"
          onChange={onSreachHanlder}
        />
      </div>

      <h1>tab sections</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => dispacth(setActiveTab("ALL"))}>All</button>
        <button onClick={() => dispacth(setActiveTab("REAMING"))}>
          remaing
        </button>
        <button onClick={() => dispacth(setActiveTab("COMPLETED"))}>
          completd
        </button>
      </div>
      <p>Todos</p>
      {/*maping the todos based sreach */}

      {todos &&
        sreachedResulut.map((todo) => (
          <div className="todoscontainer" key={todo.id}>
            <input
              className="checkBox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleCheckHandler(todo.id)}
            />
            <p className="todoText">{todo.text}</p>
            <button onClick={()=>onEditHandler(todo)}>Edit</button>
            {todo.completed && (
              <button
                className="DeltedButton"
                onClick={() => onDletedTodoHanlder(todo.id)}
              >
                Delted
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoDisplay;
