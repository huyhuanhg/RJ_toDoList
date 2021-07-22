import {Button, Card, Space, Popover} from "antd";
import {useState} from "react";
import TaskForm from "./TaskForm";

function TaskItem(props) {
    const {task, deleteTask, index, editTask} = props;
    const [isShowFormEdit, setIsShowFormEdit] = useState(false);
    return (
        <div className="task-item">
            <Card
                extra={
                    <>
                        <Space>
                            <Button onClick={() => setIsShowFormEdit(!isShowFormEdit)}>
                                Edit
                            </Button>
                            <Popover content={
                                (<div className="war">
                                    <Button onClick={() => {
                                        deleteTask(index);
                                    }
                                    }>Xóa</Button>
                                </div>)
                            } title="Bạn muốn xóa?" trigger="click">
                                <Button>
                                    Delete
                                </Button>
                            </Popover>
                        </Space>
                        {isShowFormEdit && (
                            <div className="edit-form">
                                <TaskForm style={{width: "100%"}} type='edit' task={task} index={index}
                                          editTask={editTask}
                                          setIsShowFormEdit={setIsShowFormEdit}/>
                            </div>
                        )}
                    </>
                }
                style={{width: "60%", margin: '0 auto'}}
            >
                <p>Task: {task.taskName}</p>
                <p>Description: {task.description}</p>
            </Card>
        </div>
    )
}

export default TaskItem;