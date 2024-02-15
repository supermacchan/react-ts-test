import { ToDoListProps } from "./ToDoList.props";

const ToDoList: React.FC<ToDoListProps> = ({ data, handleDelete }) => {
    
    return (
        <ul className="mt-5 flex flex-col gap-5">
            {data.map(item => 
                <li key={item} className="flex gap-5 items-center">
                    <p className="bg-white py-2 px-3 rounded-md w-[500px]">{item}</p>
                    <button 
                        type="button" 
                        className="text-xs text-blue-95"
                        onClick={() => handleDelete(item)}
                    > 
                        Remove
                    </button>
                </li>
            )}
        </ul>
    )
}

export default ToDoList;