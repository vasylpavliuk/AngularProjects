import { TodoItem } from "./todoItem";

export class TodoCollection {
    private nextId: number = 1;

    constructor(public userName: string, public todoItems: TodoItem[] = []) {};
    
    addTodo (task: string, complete: boolean = false, urgency?: number, difficulty?: number): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task, complete, urgency, difficulty));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id);
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    removeTodo(id: number): void {
        let newTodoItems: TodoItem[] = [...this.todoItems].filter( item => item.id !== id )
        this.todoItems = newTodoItems;
    } 
}