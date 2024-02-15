import { useState } from "react";

import Select from "../../components/Select/Select";
import ShoppingList from "../../components/ShoppingList/ShoppingList";

import { ShoppingItem } from "../../types"
import data from "../../data/data.json";

const ShoppingPanel = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

    const updateShoppingList = (itemName: string) => {
        const included = shoppingList.findIndex(item => item.name === itemName);

        if (included >=0) {
            return;
        }

        const index = data.goods.findIndex(item => item.name === itemName);
        setShoppingList([...shoppingList, data.goods[index] ])
    }

    return (
        <section className="bg-pink-100 w-[700px] min-h-[500px] mx-auto p-8 rounded-3xl">
            <h2 className="mb-5 text-pink-800 font-medium">Let's do some shopping!</h2>
            <Select actionHandler={updateShoppingList} />
            <ShoppingList data={shoppingList} />
        </section>
    )
}

export default ShoppingPanel;