//create actions for update the state
export const addTodo = (text) => ({
  type: "ADDTODO",
  payload: text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const updateTodo=(text)=>({
  type:"UPDATE_TODO",
  payload:text
})
export const sreachTodo = (text) => ({
  type: "SREACH_TODO",
  payload: text,
});

export const setActiveTab = (text) => ({
  type: text,
  payload:text,
});
