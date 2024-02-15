import { ToDoListProps } from "./ToDoList.props";

const ToDoList: React.FC<ToDoListProps> = ({ data }) => {
    
    return (
        <ul className="mt-5 flex flex-col gap-5">
            {data.map(item => 
                <li key={item} className="bg-white py-2 px-3 rounded-md">
                    {item}
                </li>
            )}
        </ul>
    )
}

export default ToDoList;