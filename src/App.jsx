import './App.css';
import {Card} from 'antd';

import "antd/dist/antd.css";
import {useState} from "react";
import TaskItem from "./component/TaskItem";
import TaskForm from "./component/TaskForm";
import Search from "./component/Search";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const addTask = newTask => {
        setTaskList([newTask, ...taskList]);
    }
    const editTask = (task, index) => {
        let tasks = [...taskList];
        tasks.splice(index, 1, task);
        setTaskList(tasks)
    }
    const deleteTask = index => {
        let tasks = [...taskList];
        tasks.splice(index, 1);
        setTaskList(tasks)
    }
    const filterTask = taskList.filter((task) => {
        return task.taskName.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
    })

    const rederTaskList = () => {
        return filterTask.map((task, index) => {
            return (
                <TaskItem task={task} deleteTask={deleteTask} key={index} index={index} editTask={editTask}/>
            )
        })
    }
    return (
        <div className="App">
            <Card title="To do list App" style={{width: "60%", margin: '0 auto'}}>
                <TaskForm addTask={addTask} type="add"/>
            </Card>
            <Search setSearchKey={setSearchKey}/>
            <div className="task-list">
                {rederTaskList()}
            </div>
        </div>
    );
}

export default App;

