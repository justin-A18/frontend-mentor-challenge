import type { CartItem } from '@/interfaces/cart.interface';
import { reactive } from 'vue';

interface Store {
	cart: CartItem[];
	totalPrice: number;
	totalQuantity: number;
	updateTotalPrice(): void;
	setTotalQuantity(): void;
	addToCart(cart: CartItem): void;
	deleteToCart(name: string): void;
	findOneItem(name: string): CartItem | null;
}

export const store = reactive<Store>({
	cart: [],
	totalPrice: 0,
	totalQuantity: 0,
	addToCart(cart) {
		const item = this.findOneItem(cart.name);

		if (item) {
			return this.cart = this.cart.map((item) => {
				if (item.name == cart.name) {
					return {
						...item,
						quantity: item.quantity + 1
					};
				}
				return item;
			});
		}

		this.cart.push(cart);
	},
	deleteToCart(name) {
		const item = this.findOneItem(name);

		if (item && item.quantity > 1) {
			return this.cart = this.cart.map((item) => {
				if (item.name === name) {
					item.quantity -= 1;
				}
				return item;
			});
		}

		this.cart = this.cart.filter((item) => item.name !== name);
	},
	updateTotalPrice() {
		this.totalPrice = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
	},
	setTotalQuantity() {
		this.totalQuantity = this.cart.reduce((acc, item) => acc + item.quantity, 0);
	},
	findOneItem(name) {
		return this.cart.find((item) => item.name === name) || null;
	}
});

