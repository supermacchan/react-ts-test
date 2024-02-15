import { useState } from "react";

import { CartItemProps } from "./CartItem.props";

const CartItem: React.FC<CartItemProps> = ({ item, counter }) => {
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));

        counter(item, Number(e.target.value));
    }
    
    return (
        <li className="grid grid-cols-3 items-center w-[280px]">
           <p>{item.name}</p>
           <div className="flex gap-4">
            <input 
                    type="number" 
                    name="quantity" 
                    min="1" 
                    max="100" 
                    step="1"
                    value={quantity}
                    onChange={updateQuantity}
                    className="w-[50px] rounded-lg pl-2"
                />
                <p>{item.measure}</p>
           </div>
           <button type="button" className="text-xs">Remove</button>
        </li>
    )
}

export default CartItem;