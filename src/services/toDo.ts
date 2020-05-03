import { CreateToDoRequest } from '@/models/index'

export class ToDoService {
    async addToDo(data: CreateToDoRequest) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('ADD TO DO', data);
                res()
            }, 2000);
        })

    }
}