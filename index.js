const menu = document.querySelector('.menu');
const taskMenu = document.querySelector('.task-menu');
const addTaskBtn = document.querySelector('#btn-add');

const createTask = () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const i1 = document.createElement('i');
    const i2 = document.createElement('i');
    i1.id = 'edit'
    i2.id = 'thrash'
    const textarea = document.createElement('textarea')
    i1.classList.add('fa-solid', 'fa-pen-to-square')
    i2.classList.add('fa-solid','fa-trash-can')
    textarea.id = 'text';
    textarea.name = 'text';
    textarea.cols = 25;
    textarea.rows = 15;
    div1.classList.add('task')
    div2.classList.add('task-header')
    div3.classList.add('task-body')

    div2.appendChild(i1);
    div2.appendChild(i2);
    div3.appendChild(textarea)
    div1.appendChild(div2)
    div1.appendChild(div3)
    taskMenu.appendChild(div1);
    textarea.focus();
}

addTaskBtn.addEventListener('click', () => {
    disableAll()
    createTask()
})

taskMenu.addEventListener('click', (e) => {
    if( e.path[0].id === "thrash"){
        let thrash = e.path[0].parentNode.parentNode;
        console.log('Aqui');
        taskMenu.removeChild(thrash)
    }
    else if(e.path[0].id === "edit") {
        let a = e.path[2].children[1].children[0];
        if(a.disabled){
            disableAll()
            a.disabled = false;
            a.focus()
        }else{
            a.disabled = true;
        }
        
    }
})

const disableAll = async () => {
    let txtAreas = document.querySelectorAll('#text')
    txtAreas.forEach(el =>{
        el.disabled = true;
    })
}
