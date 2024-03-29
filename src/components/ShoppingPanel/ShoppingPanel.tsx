import { useState } from "react";
import toast from "react-hot-toast";

import Select from "../../components/Select/Select";
import ShoppingList from "../../components/ShoppingList/ShoppingList";

import { ShoppingItem } from "../../types"
import data from "../../data/data.json";

const ShoppingPanel = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

    const updateShoppingList = (itemName: string) => {
        // check if the item is already selected
        const included = shoppingList.findIndex(item => item.name === itemName);

        // if selected - error notification & do nothing
        if (included >=0) {
            toast.error("The item is already in the cart.")
            return;
        }

        // if not - add to the list
        const index = data.goods.findIndex(item => item.name === itemName);
        setShoppingList([...shoppingList, data.goods[index] ])
    }

    const handleRemoveItem = (item: ShoppingItem) => {
        // locate the item we are deleting
        const itemIndex = shoppingList.findIndex(i => i.name === item.name);
        
        // update the shopping list
        const updatedList = [...shoppingList];
        updatedList.splice(itemIndex, 1);
        setShoppingList([...updatedList]);
    }

    return (
        <section className="bg-pink-100 w-[700px] min-h-[500px] mx-auto p-8 rounded-3xl">
            <h2 className="mb-5 text-pink-800 font-medium">Let's do some shopping!</h2>
            <Select actionHandler={updateShoppingList} />
            <ShoppingList data={shoppingList} handleRemove={handleRemoveItem}/>
        </section>
    )
}

export default ShoppingPanel;