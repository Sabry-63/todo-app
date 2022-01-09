import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/actions";

const Todoinput = () => {
    let dispatch = useDispatch();
    let [name, setname] = useState("");
    return (
        <div className="form">
            <input
                onInput={(e) => setname(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter Your Task"
            />
            <button
                onClick={() => {
                    dispatch(
                        addTodo({
                            id: Math.random(),
                            name: name,
                        })
                    );
                    setname("");
                }}
                className="btn_add"
            >
                Add
            </button>
        </div>
    );
};

export default Todoinput;
