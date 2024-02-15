import { ShoppingItem } from "../../types";

export type CartItemProps = {
    item: ShoppingItem;
    counter: (item: ShoppingItem, quantity: number) => void;
}