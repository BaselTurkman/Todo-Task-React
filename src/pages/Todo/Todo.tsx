import { FC, useState } from "react";
import { Container, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Task } from "./types";
import { useSnackbarAlerts } from "../../hooks/useSnackbarAlerts";

const Todo: FC = () => {
  const [todoList, setToDoList] = useState<Task[]>([]);
  const { showSuccessSnackbar } = useSnackbarAlerts();

  const addTask = (taskName: string, deadline: number) => {
    const newTask: Task = {
      id: uuidv4(),
      taskName,
      deadline,
      isComplete: false,
    };
    setToDoList((prev) => [...prev, newTask]);
  };

  const deleteTask = (taskId: string) => {
    const filteredList = todoList.filter((task) => task.id !== taskId);
    setToDoList(filteredList);
    showSuccessSnackbar("Task Deleted Successfully");
  };

  const completeTask = (taskId: string) => {
    setToDoList(
      todoList.map((task) => {
        const haveSameId = task.id === taskId;
        if (haveSameId) return { ...task, isComplete: !task.isComplete };
        return task;
      })
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Todo List
      </Typography>
      <Header addTask={addTask} />
      <TodoList
        todoList={todoList}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </Container>
  );
};

export default Todo;
