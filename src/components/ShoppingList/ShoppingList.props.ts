import { ShoppingItem } from "../../types"

export type ShoppingListProps = {
    data: ShoppingItem[];
    handleRemove: (item: ShoppingItem) => void;
}