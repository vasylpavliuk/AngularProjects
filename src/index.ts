
import { TodoItem } from './todoItem';
import { TodoCollection } from './todoCollection';
import { TodoCollectionExtended } from './todoCollectionExtended';

let todos: TodoItem[] = [
    new TodoItem(1, 'Feed the lion', false, 10, 4),
    new TodoItem(2, 'Gather mushrooms', false, 1, 4),
    new TodoItem(3, 'Clean your room', false, 3, 10),
    new TodoItem(4, 'Make dishes', false, 8, 5)
]

let collectionExtended = new TodoCollectionExtended('Vasia', todos);

console.clear();
console.log(`${collectionExtended.userName}'s Todo List!`);

let newId: number = collectionExtended.addTodo('Go for a walk', false, 6, 3);
let todoItem: TodoItem = collectionExtended.getTodoById(newId);
collectionExtended.removeTodo(2);   
console.log(`${JSON.stringify(collectionExtended)}`);

collectionExtended.sortUrgency();
console.log(`${JSON.stringify(collectionExtended)}`);

collectionExtended.sortDifficulty();
collectionExtended.markComplete(1);
collectionExtended.markComplete(4);
console.log(`${JSON.stringify(collectionExtended)}`);
