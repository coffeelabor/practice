const initialState = {
  todos: [
    {
      id: 1,
      title: "do some stuff",
      completed: false,
    },
    {
      id: 2,
      title: "mow yard",
      completed: false,
    },
    {
      id: 3,
      title: "gutters",
      completed: false,
    },
  ],
};

export const rootReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return{
                ...state,
                todos: [...state.todos, newTodo]
            }
        
        default:
            return state;
    }
}