import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function tasksPage() {

    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks()
    }, []);

    if (tasks.length === 0) return (<h1>No hay alguna nota </h1>);
    
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {
            tasks.map(task => (
                <TaskCard task={task} key={task._id}/>
            ))
        }
    </div>
    );
}

export default tasksPage;