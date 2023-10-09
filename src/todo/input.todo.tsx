import { useState } from "react";

interface IProps {
    name: string;
    age?: number;
    info?: {
        gender: string;
        address: string;
    };
}
// const InputTodo = (props: IProps) => {
const InputTodo = (props: IProps) => {
    const [todo, setTodo] = useState("");
    const [listTodos, setListTodos] = useState<string[]>([]);
    console.log(">>>check todo: ", todo);
    const handleClick = () => {
        setListTodos([...listTodos, todo]);
        setTodo("");
    };
    return (
        <div>
            <div>
                <div>name: {props.name}</div>
                <label htmlFor="text">Add new todo</label>
            </div>
            <input
                type="text"
                value={todo}
                id="text"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    handleClick();
                }}
            >
                Save
            </button>
            <ul>
                {listTodos.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default InputTodo;
