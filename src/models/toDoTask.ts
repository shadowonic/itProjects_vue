export interface ToDoTask {
    id: string;
    toDoId: string;
    value: string;
    isDone: boolean;
}
export interface CreateToDoTask {
    toDoId: string,
    value: string
}