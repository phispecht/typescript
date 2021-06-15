import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

// typescript - check data by defining properties
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, title, finished)
})

const logTodo = (id: number, title: string, finished: boolean) => {
    console.log(`The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finsihed? ${finished}`)
}