import { useState } from "react";

import { ToDoFormProps } from "./ToDoForm.props";

const ToDoForm:React.FC<ToDoFormProps> = ({ actionHandler }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        actionHandler(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="text" 
                type="text"
                className="py-2 px-3 rounded-md w-[500px]"
                onChange={handleChange}
                value={inputValue}
            />

            <button 
                type="submit" 
                className="ml-5 py-2 px-4 bg-blue-800 text-white uppercase rounded-md"
            >
                Add
            </button>
        </form>
    )
}

export default ToDoForm;