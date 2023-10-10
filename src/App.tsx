import { useState } from "react";
import InputTodo from "./todo/input.todo";

function App() {
    const name: string = "Tuyen Vu";

    const [listTodo, setListTodo] = useState<string[]>(["todo 1", "todo 2"]);
    return (
        <>
            <InputTodo
                name={name}
                listTodo={listTodo}
                setListTodo={setListTodo}
            />
            <ul>
                {listTodo.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </>
    );
}

export default App;
