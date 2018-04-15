
import { combineReducers } from 'redux';
import {INITIAL_TASKS} from './tasks';
import * as _ from 'lodash';
import { SET_ACTIVE_TASK, SET_SELECTED_SUBTASK, SET_TASK_ROOT, ADD_TASK, EDIT_TASK } from '../actions';

const initialState = {
    rootTask: null,
    allTasks: INITIAL_TASKS,
    tasks: INITIAL_TASKS.filter(x => !x.parent),
    selectedTask: null,
    subtasks: []
};

const taskReducer = (prevState, {type, payload}) => {
    if(!prevState) return initialState;
    const {allTasks} = prevState;
    const task = typeof payload.task === 'number' ? _.find(INITIAL_TASKS, {id: payload.task}) : payload.task;
    switch(type) {
        case SET_ACTIVE_TASK:
            return {...prevState, subtasks: allTasks.filter(x => x.parent === task.id), selectedTask: task, selectedSubtask: null};
        case SET_TASK_ROOT:
            if(!task) return initialState;
            return {...prevState, allTasks: allTasks.filter(t => t.parent === task.id), subtasks: [], selectedTask: null, selectedSubtask: null, rootTask: task};
        case SET_SELECTED_SUBTASK:
            return {...prevState, selectedSubtask: task};
        case ADD_TASK: 
            return {...prevState, allTasks: [...allTasks, payload.task]};
        case EDIT_TASK:
            console.log(payload);
            return prevState;
        default:
            return prevState;
    }
};

export default combineReducers({
  tasks: taskReducer
});