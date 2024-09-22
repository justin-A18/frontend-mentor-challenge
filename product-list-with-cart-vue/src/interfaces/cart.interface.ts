import type { Desserts } from "./dessert.interface";

type CartModel = Omit<Desserts, 'category'>;

export interface CartItem extends CartModel {
	quantity: number;
}
