import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            console.log();
            newTodos = [...state];
            if (action.payload.name !== "") {
                newTodos.push(action.payload);
            } else {
                alert("you can`t add empty");
            }
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            const index = newTodos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            newTodos[index].name = action.payload.name;
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter((todo) => todo.id !== action.payload);
            return newTodos;
        default:
            return state;
    }
};
