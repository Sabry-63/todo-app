import React from "react";
import Todoinput from "./components/todoInput";
import Todolist from "./components/todoList";

import "./sass/_app.scss";
const App = () => {
    return (
        <div className="app">
            <Todoinput />
            <Todolist />
        </div>
    );
};

export default App;
