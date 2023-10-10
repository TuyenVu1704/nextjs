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
// const InputTodo = (props: IProps) => {
const InputTodo = (props: IProps) => {
    return (
        <div>
            <div>
                <div>name: {props.name}</div>
                <label htmlFor="text">Add new todo</label>
            </div>
            <input type="text" id="text" />
            <button>Save</button>
        </div>
    );
};

export default InputTodo;
