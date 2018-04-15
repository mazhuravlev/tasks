import React from 'react';
import {connect} from 'react-redux';
import {editTask} from './../actions';

const initialState = {isEditing: false, newName:'', newDescription: ''};

class details extends React.Component {
    constructor() {
        super();
        this.state = initialState;
        this.saveTask = this.saveTask.bind(this);
    }

    render() {
        const {task} = this.props;
        const display = (
            <div>
                <h3>{task.t} <button className="btn btn-sm" onClick={() => this.startEdit()}>edit</button></h3>
                <p>{task.description}</p>
            </div>
        );
        const edit = (
            <div>
                <h3><input className="form-control" value={this.state.newName} onChange={e => this.setState({newName: e.target.value})}/></h3>
                <p>
                    <textarea className="form-control" value={this.state.newDescription} onChange={e => this.setState({newDescription: e.target.value})}/>
                </p>
                <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={this.saveTask}>Save</button>
                    <button className="btn btn" onClick={() => this.setState({isEditing: false})}>Cancel</button>
                </div>
            </div>
        );
        return this.state.isEditing ? edit : display;
    }

    startEdit() {
        const {task} = this.props;
        this.setState({
            isEditing: true,
            newName: task.t,
            newDescription: task.description
        });
    }

    saveTask() {
        const {newName, newDescription} = this.state;
        this.props.editTask(this.props.task, {name: newName, description: newDescription});
        this.setState({isEditing: false});
    }
}

const Details = connect(state => ({}), {editTask})(details);
export default Details;