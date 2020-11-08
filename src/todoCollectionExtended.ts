import { TodoCollection } from "./todoCollection";
import { TodoItem } from "./todoItem";

export class TodoCollectionExtended extends TodoCollection {
    doneCollection: TodoItem[] = [];

    sortUrgency():void {
        let newTodoItems: TodoItem[] = [...this.todoItems].sort((a, b) => b.urgency - a.urgency);
        this.todoItems = newTodoItems;
    }

    sortDifficulty(): void {
        let newTodoItems: TodoItem[] = [...this.todoItems].sort((a, b) => b.difficulty - a.difficulty);
        this.todoItems = newTodoItems;
    }

    markComplete(id: number): void {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = true;
            this.doneCollection.push(...this.todoItems.filter( item => item.complete === true));
            this.todoItems = this.todoItems.filter( item => item.complete !== true );   
        }
    }
}