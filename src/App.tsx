import InputTodo from "./todo/input.todo";

function App() {
    const name: string = "Tuyen Vu";
    return (
        <>
            <InputTodo name={name} />
        </>
    );
}

export default App;
