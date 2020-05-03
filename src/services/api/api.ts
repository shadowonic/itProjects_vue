import { ToDoService } from './toDo'
import { ToDoTaskService } from './toDoTask'
export class Api {
    toDo = new ToDoService()
    toDoTask = new ToDoTaskService()
}
export default new Api()