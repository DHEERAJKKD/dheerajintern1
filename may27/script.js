
document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;
    if (taskText) {
        addTask(taskText);
        input.value = ''; // Clear input after adding
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    listItem.textContent = taskText;
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
}
