import React from 'react';
import {connect} from 'react-redux';
import {setActiveTask, setSelectedSubtask, setTaskRoot} from './../actions';
import TaskList from '../components/TaskList';
import AddButton from '../components/AddButton';

class Tasks extends React.Component {
    render() {
        const {tasks} = this.props;
        const rootTask = (root => root ? (<div><button className="btn" onClick={() => this.props.setTaskRoot(root.parent)}>Up</button> Task: {root.t}</div>) : 'Root level')(tasks.rootTask);
        return (
            <div className="container-fluid" style={{padding: '24px'}}>
                <div className="row">
                <div className="col-sm" style={{padding: '16px'}}>
                    {rootTask}
                </div> 
                </div>
                <div className="row">
                <div className="col-sm" style={{padding: '16px'}}>
                    <TaskList tasks={tasks.tasks} selectedTask={tasks.selectedTask} subActive={!!tasks.selectedSubtask} go={t => this.props.setTaskRoot(t)} click={t => this.props.setActiveTask(t)} />
                    <AddButton click={() => this.addTask(rootTask)}/>
                </div>
                <div className="col-sm" style={{padding: '16px'}}>
                    {tasks.selectedTask ? (<div>{tasks.selectedTask.t} <small>subtasks</small></div>): null}
                    <TaskList selectedTask={tasks.selectedSubtask} tasks={tasks.subtasks} go={t => this.props.setTaskRoot(t)} click={t => this.props.setSelectedSubtask(t)}/>
                    {tasks.selectedTask ? <AddButton click={() => this.addTask(tasks.selectedSubtask)}/> : null}
                </div>
                <div className="col-sm" style={{padding: '16px'}}>
                    {tasks.selectedSubtask ? this.renderDetails(tasks.selectedSubtask) : tasks.selectedTask ? this.renderDetails(tasks.selectedTask) : 'Select a task'}
                </div>
                </div>
            </div>
        );
      }

      addTask(parentTask) {
        console.log(parentTask);
      }

      renderDetails(task) {
        return (
            <div>
                <h3>{task.t}</h3>
                <p>{task.description}</p>
            </div>
        );
      }
}

export default connect(state => ({tasks: state.tasks}), {setActiveTask, setSelectedSubtask, setTaskRoot})(Tasks);