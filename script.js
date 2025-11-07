//contants declared for input buttom and task list area
const taskInput = document.querySelector('#newtask input');
const taskSection = document.querySelector('.tasks');

//listener for the Enter key. Used to add a new task
taskInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){createTask();}
});

//the onclick event for the ``Add'' button
document.querySelector('#push').onclick = function(){   
    createTask();
}

//the function that creates a new task
function createTask(){
    if(taskInput.value.length == 0){
        alert("Enter a new task!");
    }
    else{
    // this block inserts HTML that creates each task into the task area div element
        taskSection.innerHTML += `
        <div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${document.querySelector('#newtask input').value}</p>
            </label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>
        `;
        taskInput.value = ""; //clears the ``Add a task'' area after adding a task
        taskInput.focus();
        var current_tasks = document.querySelectorAll('.delete');
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // adds a scrollbar if the task area height is larger than 300px
        // and removes it if it is less than 300px
        taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
    }
}

function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if(task.checked){
        taskItem.classList.add("checked");
        taskItem.style.textDecoration = "line-through";
    } 
    else {
        taskItem.classList.remove("checked");
    }
}