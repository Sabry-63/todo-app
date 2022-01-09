import React from "react";
import { useSelector } from "react-redux";
import Todoitem from "./todoItem";

const Todolist = () => {
    let todos = useSelector((state) => state);
    return (
        <div className="list">
            {todos.length > 0 ? (
                todos.map((todo) => {
                    return <Todoitem key={todo.id} todo={todo} />;
                })
            ) : (
                <h2>You Do`t Have Any Task Now </h2>
            )}
        </div>
    );
};

export default Todolist;
