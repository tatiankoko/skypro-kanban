import {createContext, useContext, useState} from 'react';
import {deleteTask, editTask, postTask} from "../services/api.js";
import {useAuth} from "./AuthContext.jsx";

const TasksContext = createContext(undefined);

export function TasksProvider({ children }) {
    const {user} = useAuth();
    const [tasks, setTasks] = useState(null);

    // Функция добавления новой задачи
    const addTask = async (newTask) => {
        const data = await postTask({
            token: user?.token,
            task: JSON.stringify(newTask)
        });

        if (data) {
            setTasks(data);
            return true;
        } else {
            return false;
        }
    };

    // Функция редактирования задачи
    const updateTask = async (updatedTask) => {
        const data = await editTask({
            token: user?.token,
            id: updatedTask._id,
            task: JSON.stringify(updatedTask)
        })

        if (data) {
            setTasks(data);
            return true;
        } else {
            return false;
        }
    };

    // Функция удаления задачи
    const removeTask = async (id) => {
        const data = await deleteTask({
            token: user.token,
            id: id
        });

        if (data) {
            setTasks(data);
            return true;
        } else {
            return false;
        }
    };

    return (
        <TasksContext.Provider value={{
            tasks, setTasks,
            addTask,
            updateTask,
            removeTask
        }}>
            {children}
        </TasksContext.Provider>
    );
}

// Кастомный хук
export function useTasks() {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks должен использоваться внутри TasksProvider');
    }
    return context;
}

export default TasksContext;