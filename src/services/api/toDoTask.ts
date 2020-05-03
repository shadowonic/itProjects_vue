import { CreateToDoTask, ToDoTask } from '@/models'
import { ObjectId } from '../idCreator'
export class ToDoTaskService {
     addToDoTask(data: CreateToDoTask): Promise<ToDoTask> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                const {value, toDoId} = data;
                res({
                    id: ObjectId.create(),
                    value,
                    toDoId,
                    isDone: false
                })
            }, 300);
        })
    }
}