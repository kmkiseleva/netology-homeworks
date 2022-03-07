import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summWithoutDiscount() {
        return this.items.reduce((acc, currentValue) => acc + currentValue.price, 0);
    }

    summWithDiscount(discount: number) {
        return this.items.reduce((acc, currentValue) => acc + currentValue.price, 0) * (1 - discount / 100);

    }
    
    deleteItem(id: number): void {
        for (let item of this.items) {
            if (item.id === id) {
                const index = this.items.indexOf(item);
                this._items.splice(index, 1);
            }
        }
    }
}