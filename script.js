const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    // Get the input value
    const taskText = taskInput.value.trim();
    
    // Prevent adding empty tasks
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new list item element
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Create a span element to hold the task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.innerText = taskText;
    taskItem.appendChild(taskTextSpan);

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(removeBtn);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input box
    taskInput.value = '';
}

// Add an event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow adding task with Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});