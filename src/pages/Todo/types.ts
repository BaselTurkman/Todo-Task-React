export interface Task {
  id: string;
  taskName: string;
  deadline: number;
  isComplete: boolean;
}

export interface HeaderProps {
  addTask: (taskName: string, deadline: number) => void;
}

export interface TodoListProps {
  todoList: Task[];
  deleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
}

export interface TodoTaskProps {
  task: Task;
  deleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
}
