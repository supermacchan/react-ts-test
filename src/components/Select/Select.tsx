import { useState } from "react";

import { SelectProps } from "./Select.props";
import data from "../../data/data.json";

const Select:React.FC<SelectProps> = ({ actionHandler }) => {
    const [selectedValue, setSelectedValue] = useState(data.goods[0].name);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        actionHandler(selectedValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <select className="w-[200px] py-2 rounded-md" onChange={handleSelectChange}>
                {data.goods.map(item => 
                    <option value={item.name} key={item.name}>{item.name}</option>
                )}
            </select>
            <button type="submit" className="ml-5 py-2 px-4 bg-pink-800 text-white uppercase rounded-md">Add</button>
        </form>
    )
}

export default Select;