// script.js

// Selecting elements
const addButton = document.getElementById('add-button');
const submitButton = document.getElementById('submit-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to create a new task element
function createTask(taskContent) {
  const li = document.createElement('li');

  // Add task content
  const textNode = document.createTextNode(taskContent);
  li.appendChild(textNode);

  // Add a "Completed" button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-btn');
  li.appendChild(completeButton);

  // Event listener for the complete button
  completeButton.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Add a "Delete" button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  li.appendChild(deleteButton);

  // Event listener for the delete button
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append task item to the list
  taskList.appendChild(li);
}

// Event listener for the Add button
addButton.addEventListener('click', () => {
  const taskContent = taskInput.value.trim();

  if (taskContent) {
    createTask(taskContent); // Add the new task to the list
    taskInput.value = ''; // Clear the input field
  }
});

// Event listener for the Enter key (for convenience)
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addButton.click();
  }
});

// Event listener for the Submit button (for example purposes)
submitButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('li');
  const completedTasks = [];
  tasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      completedTasks.push(task.textContent.replace('CompleteDelete', '').trim());
    }
  });

  if (completedTasks.length > 0) {
    alert(`You have completed the following tasks: \n${completedTasks.join('\n')}`);
  } else {
    alert('No tasks completed yet.');
  }
});
