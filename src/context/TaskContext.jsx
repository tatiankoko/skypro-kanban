import { createContext } from 'react';

const TasksContext = createContext();

/*export function TasksProvider({ children }) {
    return (
        <TasksContext.Provider value={{ tasks }}>
            {children}
        </TasksContext.Provider>
    );
}*/
export default TasksContext;