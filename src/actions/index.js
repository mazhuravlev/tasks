const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK';
const SET_SELECTED_SUBTASK = 'SET_SELECTED_SUBTASK';
const SET_TASK_ROOT = 'SET_TASK_ROOT';
const ADD_TASK = 'ADD_TASK';

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

function addTask(parentTask) {
    return {
        type: ADD_TASK,
        payload: {parentTask}
    }
}

const EDIT_TASK = 'EDIT_TASK';
function editTask(task, newTask) {
    return {
        type: EDIT_TASK,
        payload: {task, newTask}
    };
}

export {
    setActiveTask,
    SET_ACTIVE_TASK,
    setSelectedSubtask,
    SET_SELECTED_SUBTASK,
    setTaskRoot,
    SET_TASK_ROOT,
    ADD_TASK,
    addTask,
    EDIT_TASK,
    editTask
};