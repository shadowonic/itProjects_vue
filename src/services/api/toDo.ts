import { CreateToDoRequest } from '@/models/index'
import { ObjectId } from '../idCreator'
import { ToDo } from '@/models'
const fakeDb = new Map()
export class ToDoService {
    addToDo(data: CreateToDoRequest): Promise<ToDo> {
        return new Promise((res, rej) => {
            res({
                id: ObjectId.create(),
                name: data.name,
                tasks: []
            })
        })

    }
}