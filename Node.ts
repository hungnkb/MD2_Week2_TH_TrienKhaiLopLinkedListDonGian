export class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    readData(): T | null {
        return this.data;
    }
}