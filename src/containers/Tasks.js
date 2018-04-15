import React from 'react';
import {connect} from 'react-redux';
import {setActiveTask, setSelectedSubtask, setTaskRoot, addTask} from './../actions';
import TaskList from '../components/TaskList';
import AddButton from '../components/AddButton';
import Details from './Details';

class Tasks extends React.Component {
    render() {
        const {tasks} = this.props;
        const rootTask = (root => root ? (<div><button className="btn" onClick={() => this.props.setTaskRoot(root.parent)}>Up</button> Task: {root.t}</div>) : null)(tasks.rootTask);
        return (
            <div className="container-fluid" style={{padding: '24px'}}>
                <div className="row">
                <div className="col-sm" style={{padding: '16px'}}>
                    {rootTask || 'Root level'}
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
                    {tasks.selectedTask ? <AddButton click={() => this.addTask(tasks.selectedTask)}/> : null}
                </div>
                <div className="col-sm" style={{padding: '16px'}}>
                    {tasks.selectedSubtask ? <Details task={tasks.selectedSubtask}/> : tasks.selectedTask ? <Details task={tasks.selectedTask}/> : 'Select a task'}
                </div>
                </div>
            </div>
        );
      }

      addTask(parentTask) {
        addTask(parentTask);
      }
}

export default connect(state => ({tasks: state.tasks}), {setActiveTask, addTask, setSelectedSubtask, setTaskRoot})(Tasks);