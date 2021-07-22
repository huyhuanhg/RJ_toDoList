import {useState} from "react";

function TaskForm({type, addTask, editTask, task, index, setIsShowFormEdit}) {
    const [fieldValues, setFieldValues] = useState({
        taskName: type === 'add' ? '' : task.taskName,
        description: type === 'add' ? '' : task.description,
    });
    const handleChangeField = (e) => {
        setFieldValues({
            ...fieldValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'add') {
            addTask(fieldValues);
            setFieldValues({
                taskName: "",
                description: ""
            })
        } else {
            editTask(fieldValues, index);
            setIsShowFormEdit(false)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label style={{width: "30%", display: "inline-block"}}> Tên công việc: </label>
            <input
                name="taskName"
                type="text"
                placeholder="Nhập tên công việc"
                style={{width: "50%"}}
                value={fieldValues.taskName}
                onChange={handleChangeField}
            /> <br/><br/>
            <label style={{width: "30%", display: "inline-block"}}>Mô tả: </label>
            <input
                name="description"
                type="text"
                placeholder="Nhập mô tả công việc"
                style={{width: "50%"}}
                value={fieldValues.description}
                onChange={handleChangeField}
            /> <br/><br/>
            <input
                type="submit"
                value={type === 'add' ? 'Add' : 'Edit'}
                style={{width: "80%", marginLeft: "10%"}}
            />
        </form>
    )
}

export default TaskForm;