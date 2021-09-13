export type user = {
    id: number,
    name: string,
    nickname: string,
    email: string
}

export type task = {
    id: number,
    title: string,
    description: string,
    deadline: Date,
    status: string,
    author: number,
}

export type Assignee = {
    task_id: number,
    assignee_id: number,
}