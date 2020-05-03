import { ToDoTask } from './toDoTask'

export interface ToDo {
    id: string;
    name: string
    tasks: ToDoTask[]
}
export interface CreateToDoRequest {
    name: string
}