import React from 'react';

const TaskList = ({tasks, click, go, selectedTask, subActive}) => {
    function doGo(e, id) {
        e.stopPropagation();
        if(go) go(id);
    }
    const taskList = tasks.map(x => 
    <li className={'cursor-pointer hover-active list-group-item d-flex justify-content-between align-items-center' +
      (selectedTask === x ? ' active' : '') + (subActive ? ' subactive' : '')} onClick={() => (click ? click(x) : null)} key={x.id}>
        {x.t} 
        <span onClick={e => doGo(e, x.id)} className="cursor-pointer badge badge-secondary badge-pill">&gt;</span>
    </li>);
    return (
        <ul className='list-group'>
            {taskList}
        </ul>
    );
};

export default TaskList;