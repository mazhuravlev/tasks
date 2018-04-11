const faker = require('faker');

const INITIAL_TASKS = [
    {id: 1, t: 'Project A', parent: null},
    {id: 2, t: 'Project B', parent: null},
    {id: 3, t: 'Project C', parent: null},
];

let id = 4;

function createSubtasks(task, c) {
    const t = Math.random()*c;
    for (let i = 0; i < t; i++) {
        const newTask = {id: id++, t: faker.commerce.product() + ' ' + faker.commerce.productName() , parent: task.id, description: makeDescrtiption()};        
        INITIAL_TASKS.push(newTask);
        createSubtasks(newTask, c-1);
    }
}

function makeDescrtiption() {
    return faker.lorem.sentence(Math.random()*10+5, Math.random()*5+3);
}

INITIAL_TASKS.forEach(t => {
    t.description = makeDescrtiption();
    createSubtasks(t,4);
});

export {INITIAL_TASKS};