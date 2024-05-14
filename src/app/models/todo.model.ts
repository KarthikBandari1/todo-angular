export interface Todo {
    id: string,
    title: string,
    assignee: string,
    description: string,
    createdDate: Date,
    isCompleted: boolean,
    completedDate: Date
    isDeleted: boolean,
    deletedDate: Date
}