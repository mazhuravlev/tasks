const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK';
const SET_SELECTED_SUBTASK = 'SET_SELECTED_SUBTASK';
const SET_TASK_ROOT = 'SET_TASK_ROOT';

function setActiveTask(task) {
    return {
        type: SET_ACTIVE_TASK,
        payload: {task}
    };
}

function setSelectedSubtask(task) {
    return {
        type: SET_SELECTED_SUBTASK,
        payload: {task}
    };
}


function setTaskRoot(task) {
    return {
        type: SET_TASK_ROOT,
        payload: {task}
    };
}

export {
    setActiveTask,
    SET_ACTIVE_TASK,
    setSelectedSubtask,
    SET_SELECTED_SUBTASK,
    setTaskRoot,
    SET_TASK_ROOT
};