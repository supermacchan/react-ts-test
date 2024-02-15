import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { ShoppingListProps } from "./ShoppingList.props";

const ShoppingList: React.FC<ShoppingListProps> = ({ data }) => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const price = data.reduce((acc, item) => acc + item.price, 0);
        setAmount(price);
    }, [data])

    return (
        <div className="mt-5 min-h-[330px] flex flex-col">
            {data.length === 0
            ? <p>There's nothing in the cart yet.</p>
            : <ul className="flex flex-col gap-6">
                {data.map(item =>
                    <CartItem item={item} key={item.name} />
                )}
            </ul>
            }

            <p className="mt-auto">Total: {amount} USD</p>
        </div>
    )
}

export default ShoppingList;