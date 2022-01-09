import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./../reducer/actions";

const Todoitem = ({ todo }) => {
    const [eitdable, setEitdable] = useState(false);
    const [finshed, setFinshed] = useState(false);
    const [name, setName] = useState(todo.name);
    let dispatch = useDispatch();
    return (
        <div>
            <div className={finshed ? "item done" : "item "}>
                {eitdable ? (
                    <input
                        type="text"
                        defaultValue={name}
                        onInput={(e) => setName(e.target.value)}
                    />
                ) : (
                    <h2>{finshed ? <del>{todo.name}</del> : todo.name}</h2>
                )}

                <div className="btn-actions">
                    {finshed ? (
                        ""
                    ) : (
                        <button
                            onClick={() => {
                                setEitdable(!eitdable);
                                if (eitdable) {
                                    setName(name);
                                    dispatch(updateTodo({ ...todo, name }));
                                }
                            }}
                            className="btn_edit"
                        >
                            {eitdable ? "Update" : "Edit"}
                        </button>
                    )}

                    {eitdable ? (
                        ""
                    ) : (
                        <button
                            onClick={() => {
                                dispatch(deleteTodo(todo.id));
                            }}
                            className="btn_delete"
                        >
                            Delete
                        </button>
                    )}
                    {eitdable ? (
                        ""
                    ) : (
                        <button
                            onClick={() => {
                                setFinshed(!finshed);
                            }}
                            className="btn_edit"
                        >
                            Done
                        </button>
                    )}
                </div>
            </div>
            <br />
        </div>
    );
};

export default Todoitem;
