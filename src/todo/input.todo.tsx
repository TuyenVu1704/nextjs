import { useState } from "react";
interface IProps {
    name: string;
    age?: number;
    info?: {
        gender: string;
        address: string;
    };
    listTodo: string[];
    setListTodo: (v: string[]) => void;
}
const InputTodo = (props: IProps) => {
    const { listTodo, setListTodo } = props;

    const [todo, setTodo] = useState("");

    const handelTodo = () => {
        setListTodo([...listTodo, todo]);
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
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={() => handelTodo()}>Save</button>
        </div>
    );
};

export default InputTodo;
