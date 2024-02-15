import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { ShoppingListProps } from "./ShoppingList.props";
import { ShoppingItem } from "../../types";

const ShoppingList: React.FC<ShoppingListProps> = ({ data }) => {
    const [items, setItems] = useState<ShoppingItem[]>([]);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setItems(data);
    }, [data]);

    useEffect(() => {
        const price = items.reduce((acc, item) => acc + item.price, 0);
        setAmount(price);
    }, [items])

    const countItemPrice = (item: ShoppingItem, quantity: number): void => {
        const itemPrice = item.price * quantity;
        const itemIndex = items.findIndex(i => i.name === item.name);

        if (itemIndex >= 0) {
            const updatedItem = {...items[itemIndex], price: itemPrice};
            const updatedItems = [...items];
            updatedItems.splice(itemIndex, 1, updatedItem);

            setItems([...updatedItems]);
        }
    }

    return (
        <div className="mt-5 min-h-[330px] flex flex-col">
            {data.length === 0
            ? <p>There's nothing in the cart yet.</p>
            : <ul className="flex flex-col gap-6">
                {data.map(item =>
                    <CartItem item={item} key={item.name} counter={countItemPrice}/>
                )}
            </ul>
            }

            <p className="mt-auto">Total: {amount} USD</p>
        </div>
    )
}

export default ShoppingList;