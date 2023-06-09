const intialState = {
  todos: [],
  sreachText: "",
  filterMethod:"",
};

const todoReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDTODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length, text: payload, completed: false },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((each) =>
          each.id === payload ? { ...each, completed: !each.completed } : each
        ),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos:state.todos.map((todo)=>todo.id===action.payload.id?action.payload:todo)
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case "SREACH_TODO":
      return {
        ...state,
        sreachText: payload,
      };
      case "ALL":
        return{
          ...state,
          filterMethod:payload,
        }
      case "REAMING":
        return{
          ...state,
          filterMethod:payload,
        }
        case "COMPLETED":
          return{
            ...state,
            filterMethod:payload,
          }

    default:
      return state;
  }
};
export default todoReducer;
