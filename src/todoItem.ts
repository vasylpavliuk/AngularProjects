export class TodoItem {
constructor(public id: number, public task: string, public complete: boolean = false, public urgency?: number, public difficulty?: number) {}

printDetails(): void {
    console.log(`${this.id}. ${this.task}  ${ this.complete ? this.complete : "" }`)
    }
}